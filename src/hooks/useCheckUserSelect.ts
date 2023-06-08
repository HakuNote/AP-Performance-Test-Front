import { useRecoilValue } from 'recoil';
import { floorState, roomState, locationClassState } from '../recoil/Atom';

// START 버튼 클릭시 사용자가 floor, room, locationClass 모두 선택했는지 확인한다.
const useCheckUserSelect = () => {
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  if (floor === '') {
    // console.log('Floor null return false');
    return false;
  }
  if (room === '') {
    // console.log('Room null return false');
    return false;
  }
  if (locationClass === '') {
    // console.log('Location null return false');
    return false;
  }

  // floor, room, locationClass 모두 Select 됬을경우에 true
  // console.log('모든 조건 선택 완료.');
  return true;
};

export default useCheckUserSelect;
