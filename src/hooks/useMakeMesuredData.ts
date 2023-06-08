import { useRecoilValue } from 'recoil';
import {
  floorState,
  roomState,
  locationClassState,
  cookieState,
  speedTestDataFromServerState,
  SpeedTestWithUserInfoData,
} from '../recoil/Atom';

const useMakeMesuredData = () => {
  // Recoil에 담긴 유저 위치정보
  const floorNumber = useRecoilValue(floorState);
  const roomNumber = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  const userCookie = useRecoilValue(cookieState);

  // Recoil에 담긴 속도측정 결과 정보 가져와서 위치정보 추가하여 저장
  const speedtestData = useRecoilValue(speedTestDataFromServerState);
  const AssembledData: SpeedTestWithUserInfoData = {
    ...speedtestData,
    floorNumber,
    roomNumber,
    locationClass,
    userCookie,
  };

  return AssembledData;
};

export default useMakeMesuredData;
