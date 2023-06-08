import axios from 'axios';
import { MeasurementData } from '../../../recoil/Atom';

const host = (import.meta as any).env.VITE_SERVER;
const httpUrl = `http://${host}/api/speedtest`;

// dayOfWeek index를 인자로 받아 서버에서 받은 데이터를 리턴하는 함수
// useGetMeasurementData 에서 사용중 둘이 합쳐야 할지 생각중
const FetchData = async (dayOfWeek: number) => {
  let finalHttpUrl = ``;
  if (dayOfWeek === -1) {
    // default값 = -1 -> 아직 요일 설정 하지 않은경우 기존 쿼리 사용
    finalHttpUrl = `${httpUrl}`;
  } else {
    // default값 X -> 특정 요일 데이터 요청 쿼리 생성
    finalHttpUrl = `${httpUrl}_by_day?day=${dayOfWeek}`;
  }
  try {
    const response = await axios.get(finalHttpUrl);
    const receivedData: MeasurementData[] = response.data;
    return receivedData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default FetchData;
