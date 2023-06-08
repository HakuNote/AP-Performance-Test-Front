/* eslint-disable no-throw-literal */

import { SpeedTestDataFromServer } from '../recoil/Atom';

type Latency = number;
export interface MeasurementResult {
  avgPing: Latency;
  jitter: Latency;
  upstreamSpeed: number; // KB/s
  downstreamSpeed: number; // KB/s
}

interface Server {
  name: string;
  server: string;
  dlURL: string;
  ulURL: string;
  pingURL: string;
  getIpURL: string;
}

class Speedtest {
  private serverList: Server[];

  private selectedServer: Server | null;

  private selectServerCalled: boolean;

  private settings: Record<string, number | string | boolean>;

  private state: number;

  // 오류발생이 이곳
  private updater: number | null;
  // private updater: NodeJS.Timeout | null;

  private worker: Worker;

  private onupdate: (arg: SpeedTestDataFromServer) => void;

  private onend: (arg: boolean) => void;

  // 아직 데이터 타입을 잘 모르므로 임시로 any라고 함.
  // 추후 수정 필요
  prevData: SpeedTestDataFromServer | null;

  constructor(
    onupdate: (arg: SpeedTestDataFromServer) => void,
    onend: (arg: boolean) => void
  ) {
    this.serverList = []; // when using multiple points of test, this is a list of test points
    this.selectedServer = null; // when using multiple points of test, this is the selected server
    this.selectServerCalled = false;
    this.settings = {}; // settings for the speedtest worker
    this.state = 0; // 0=adding settings, 1=adding servers, 2=server selection done, 3=test running, 4=done
    this.updater = null;
    this.worker = new Worker(`speedtest_worker.js?r=${Math.random()}`); // random변수는 캐시무효화를 위함
    // this.worker = new Worker(`speedtest_worker.js`); // random변수는 캐시무효화를 위함
    this.prevData = null;
    this.onupdate = onupdate;
    this.onend = onend;
  }

  getState() {
    return this.state;
  }

  setParameter(parameter: string, value: number) {
    if (this.state !== 0)
      throw 'You cannot change the test settings after adding server or starting the test';
    this.settings[parameter] = value;
  }

  static checkServerDefinition(server: Server): Server {
    try {
      if (typeof server.name !== 'string')
        throw 'Name string missing from server definition (name)';
      if (typeof server.server !== 'string')
        throw 'Server address string missing from server definition (server)';
      let newServerURL = server.server;
      if (newServerURL.charAt(newServerURL.length - 1) !== '/')
        newServerURL += '/';
      if (newServerURL.indexOf('//') === 0)
        newServerURL = window.location.protocol + newServerURL;

      if (!server.dlURL)
        throw 'Download URL string missing from server definition (dlURL)';
      if (!server.ulURL)
        throw 'Upload URL string missing from server definition (ulURL)';
      if (!server.pingURL)
        throw 'Ping URL string missing from server definition (pingURL)';
      if (!server.getIpURL)
        throw 'GetIP URL string missing from server definition (getIpURL)';

      return {
        ...server,
        server: newServerURL,
      };
    } catch (e) {
      throw 'Invalid server definition';
    }
  }

  addTestPoint(server: Server) {
    const checkedServer = Speedtest.checkServerDefinition(server);
    if (this.state === 0) this.state = 1;
    if (this.state !== 1) throw "You can't add a server after server selection";
    this.settings.mpot = true;
    this.serverList.push(checkedServer);
  }

  addTestPoints(list: Server[]) {
    list.forEach(item => this.addTestPoint(item));
  }

  getSelectedServer() {
    if (this.state < 2 || this.selectedServer == null)
      throw 'No server is selected';
    return this.selectedServer;
  }

  setSelectedServer(server: Server) {
    const checkedServer = Speedtest.checkServerDefinition(server);
    // const checkedServer = server;
    if (this.state === 3)
      throw "You can't select a server while the test is running";
    this.selectedServer = checkedServer;
    this.state = 2;
  }

  // eslint-disable-next-line class-methods-use-this
  selectServer(result: (arg: Server) => void) {
    if (this.state !== 1) {
      if (this.state === 0) throw 'No test points added';
      if (this.state === 2) throw 'Server already selected';
      if (this.state >= 3)
        throw "You can't select a server while the test is running";
    }
    if (this.selectServerCalled) throw 'selectServer already called';
    else this.selectServerCalled = true;
    // // 일단은 서버를 하나만 쓰기 때문에 맨 처음 리스트에 있는 서버만 사용
    // // 따라서 핑테스트를 해서 성능이 가장 좋은 서버를 추려내는건 추후에 작업
    [this.selectedServer] = this.serverList;
    this.state = 2;
    if (result) result(this.serverList[0]);
  }

  start() {
    console.log(' speedtest.ts in start');
    if (this.state === 3) throw 'Test already running';
    this.worker.onmessage = (e: MessageEvent) => {
      if (e.data === this.prevData) return;
      this.prevData = e.data;
      const data = JSON.parse(e.data);

      try {
        if (this.onupdate) this.onupdate(data);
      } catch (err) {
        console.error(`Speedtest onupdate event threw exception: ${err}`);
      }
      if (data.testState >= 4) {
        try {
          if (this.onend) this.onend(data.testState === 5);
        } catch (err) {
          console.error(`Speedtest onend event threw exception: ${err}`);
        }
        if (this.updater != null) clearInterval(this.updater);
        this.state = 4;
      }
    };

    this.updater = setInterval(() => {
      this.worker.postMessage('status');
    }, 200);

    if (this.state === 1)
      throw 'When using multiple points of test, you must call selectServer before starting the test';
    if (this.state === 2 && this.selectedServer != null) {
      this.settings.url_dl =
        this.selectedServer.server + this.selectedServer.dlURL;
      this.settings.url_ul =
        this.selectedServer.server + this.selectedServer.ulURL;
      this.settings.url_ping =
        this.selectedServer.server + this.selectedServer.pingURL;
      this.settings.url_getIp =
        this.selectedServer.server + this.selectedServer.getIpURL;
    }
    this.state = 3;
    this.worker.postMessage(`start ${JSON.stringify(this.settings)}`);
  }

  abort() {
    if (this.state < 3) throw "You cannot abort a test that's not started yet";
    if (this.state < 4) this.worker.postMessage('abort');
  }
}

export default Speedtest;
