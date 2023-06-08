import { useRecoilValue } from 'recoil';
import { SpeedMapState } from '../recoil/Atom';
import DetermineColorLabel from '../pages/Visualization/func/DetermineColorLabel';

// floor, room, currentClass를 Input으로 사용하여 평균속도를 계산하고 Class에 대한 Color label을 반환한다.
export const useDetermineClassColor = (
  floor: string,
  room: string,
  curClass: string
): string => {
  const filteredData = useRecoilValue(SpeedMapState);

  let totalNumberOfData = 0;
  let totalDownstreamSpeed = 0;

  const key = `floorNumber:${floor},roomNumber:${room},locationClass:${curClass}`;
  const EachDataUsingKey = filteredData.get(key);

  if (typeof EachDataUsingKey !== 'undefined') {
    const numberOfData = EachDataUsingKey.length;
    totalNumberOfData += numberOfData;

    EachDataUsingKey.forEach(classItem => {
      totalDownstreamSpeed += classItem.dlStatus;
    });
  }

  const averageOfDownstreamSpeed = totalDownstreamSpeed / totalNumberOfData;
  const returnColor: string = DetermineColorLabel(averageOfDownstreamSpeed);
  return returnColor;
};

export default useDetermineClassColor;
