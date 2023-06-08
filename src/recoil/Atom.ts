import { atom } from 'recoil';

// 서버로 부터 받아오는 데이터 Schema
// 사용자 위치정보
export interface User {
  floorNumber: number;
  roomNumber: number;
  locationClass: number;
  userCookie: string;
}

// 사용자 측정 속도
export interface SpeedTestDataFromServer {
  testState: number;
  dlStatus: number;
  ulStatus: number;
  pingStatus: number;
  clientIp: string;
  jitterStatus: number;
  dlProgress: number;
  ulProgress: number;
  pingProgress: number;
  testId: string;
}

// User + SpeedData
export interface MeasurementData {
  user: User;
  speedTest: SpeedTestDataFromServer;
  createdAt: string;
}

// 서버로 보내는 데이터 Schema
// SendDataToServer.ts 에서 서버에 측정결과 POST 할 때 사용
export interface SpeedTestWithUserInfoData extends SpeedTestDataFromServer {
  floorNumber: string;
  roomNumber: string;
  locationClass: string;
  userCookie: string;
}

/* Atom */
// 사용자 층수
export const floorState = atom({
  key: 'floorState',
  default: '',
});

// 사용자 호수
export const roomState = atom({
  key: 'roomState',
  default: '',
});

// 사용자 위치 클래스
export const locationClassState = atom({
  key: 'locationClassState',
  default: '',
});

// Start 버튼 토글 현황
export const startToggleState = atom({
  key: 'startToggleState',
  default: true,
});

// cookie 활성화
export const cookieState = atom({
  key: 'cookieState',
  default: '',
});

// 시각화 PopUp 메시지에서 뜨는 층수
export const popUpFloorState = atom({
  key: 'popUpFloorState',
  default: '',
});

// 시각화 PopUp 메시지에서 뜨는 호수
export const popUpRoomState = atom({
  key: 'popUpRoomState',
  default: '',
});

export const MeasurementDataState = atom<MeasurementData[]>({
  key: 'MeasurementDataState',
  default: [],
});

// 서버에 보낼 속도 데이터
export const speedTestDataFromServerState = atom<SpeedTestDataFromServer>({
  key: 'speedTestDataFromServerState',
  default: {
    testState: 0,
    dlStatus: 0,
    ulStatus: 0,
    pingStatus: 0,
    clientIp: '',
    jitterStatus: 0,
    dlProgress: 0,
    ulProgress: 0,
    pingProgress: 0,
    testId: '',
  },
});

// 위치 기반으로 생성한 Key값과 해당 키값의 속도 데이터들이 배열로 Value값이 되는 Map
export const SpeedMapState = atom<Map<string, SpeedTestDataFromServer[]>>({
  key: 'SpeedMapState',
  default: new Map<string, SpeedTestDataFromServer[]>(),
});

// 요일을 설정하는 상태, default = -1, 일요일 = 0, 월요일 = 1, ..., 토요일 = 6
export const dayOfWeekState = atom<number>({
  key: 'dayOfWeekState',
  default: -1,
});
