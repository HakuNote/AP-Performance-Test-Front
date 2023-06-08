// 현재 Recoil에 담긴 (측정된)데이터를 Server에 보내는 함수
import axios from 'axios';
import { SpeedTestWithUserInfoData } from '../../../../recoil/Atom';

const host = (import.meta as any).env.VITE_SERVER;
const httpUrl = `http://${host}/api/save_speedtest`;

const SendDataToServer = async (AssembledData: SpeedTestWithUserInfoData) => {
  try {
    const response = await axios.post(httpUrl, AssembledData, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    console.log('Data sent to server:', response.data);
  } catch (error) {
    console.error('Error sending data to server:', error);
  }
  console.log('데이터 전송 완료');
};

export default SendDataToServer;
