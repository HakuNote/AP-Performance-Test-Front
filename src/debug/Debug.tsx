import { useRecoilValue } from 'recoil';
import {
  floorState,
  roomState,
  locationClassState,
  cookieState,
} from '../recoil/Atom';

const Debug = () => {
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  const cookie = useRecoilValue(cookieState);

  return (
    <div>
      floor: {floor} <br />
      room: {room} <br />
      locationClass: {locationClass} <br />
      cookie : {cookie} <br />
    </div>
  );
};

export default Debug;
