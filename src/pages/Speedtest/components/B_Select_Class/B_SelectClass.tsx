import { useRecoilValue } from 'recoil';
import { floorState, roomState } from '../../../../recoil/Atom';

import MakeFrame from './B_MakeFrame';

import F4ClassFrame from '../../../../data/ClassFrameData/F4ClassFrame.json';
import F5ClassFrame from '../../../../data/ClassFrameData/F5ClassFrame.json';
import F6ClassFrame from '../../../../data/ClassFrameData/F6ClassFrame.json';

// const MakeFrame = (direction: string, doors: number[]) => {

interface IClassFrame {
  Floor: string;
  Data: {
    Room: string;
    Direction: string;
    Door: number[];
  }[];
}

const SelectClass = () => {
  const floor = useRecoilValue(floorState);
  const room = useRecoilValue(roomState);

  if (!room) return null; // No room information

  const ClassFrameMap = new Map<string, IClassFrame>([
    ['4', F4ClassFrame],
    ['5', F5ClassFrame],
    ['6', F6ClassFrame],
  ]);

  const currentFrame = ClassFrameMap.get(floor);

  if (!currentFrame) return null; // Unsupported floor

  const index = parseInt(`${floor}01`, 10);
  const nDoor = parseInt(room, 10);
  const doors = currentFrame.Data[nDoor - index].Door;
  const direction = currentFrame.Data[nDoor - index].Direction;

  return (
    <div>
      <MakeFrame doors={doors} direction={direction} />
    </div>
  );
};

export default SelectClass;
