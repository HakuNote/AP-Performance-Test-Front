import { useRecoilValue } from 'recoil';
import { PositionSpeedMapState } from '../../../module/Atom';
import DetermineColorLabel from './DetermineColorLabel';

// floor, room을 Input으로 사용하여 평균속도를 계산하고 Room에 대한 Color label을 반환한다.
export const DetermineRoomColor = (floor: number, room: number): string => {
  const filteredData = useRecoilValue(PositionSpeedMapState);
  // console.log(filteredData);
  let totalNumberOfData = 0;
  let totalDownstreamSpeed = 0;

  Array.from({ length: 9 }, (_, i) => i + 1).forEach(i => {
    const key = `floorNumber:${floor},roomNumber:${room},locationClass:${i}`;

    const NetworkIndexArray = filteredData.get(key);

    // undefined => 속도 데이터 없는 위치
    if (typeof NetworkIndexArray !== 'undefined') {
      const numberOfData = NetworkIndexArray.length;
      totalNumberOfData += numberOfData;

      NetworkIndexArray.forEach(item => {
        totalDownstreamSpeed += item.dlStatus;
      });
    }
  });

  // downstreamSpeed 평균값
  const averageOfDownstreamSpeed = totalDownstreamSpeed / totalNumberOfData;

  // 색상 레이블 리턴
  return DetermineColorLabel(averageOfDownstreamSpeed);
};

export default DetermineRoomColor;
