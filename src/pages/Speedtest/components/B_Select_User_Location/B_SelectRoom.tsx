/* RecoilHook */
import { useRecoilState } from 'recoil';
import { FC } from 'react';

/* MUI */
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

/* Atom */
import { roomState } from '../../../../recoil/Atom';

const DefaultRoom = () => {
  return (
    <FormControl fullWidth sx={{ width: '140px' }} margin="normal">
      <InputLabel>Room</InputLabel>
      <Select label="Room">
        <MenuItem>층수를 먼저 선택해 주세요.</MenuItem>
      </Select>
    </FormControl>
  );
};

const ValidRoom = ({ roomsArray }: { roomsArray: string[] }) => {
  const [room, setRoom] = useRecoilState(roomState);
  const roomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
  };

  return (
    <FormControl fullWidth sx={{ width: '140px' }} margin="normal">
      <InputLabel id={room}>Room</InputLabel>
      <Select
        id={room}
        value={room}
        label="Room"
        onChange={roomChange}
        renderValue={selected => (
          <div style={{ textAlign: 'center' }}>{selected}호</div>
        )}
        sx={{ width: '140px', height: 'px' }}
      >
        {roomsArray.map(eachRoom => (
          <MenuItem
            key={eachRoom}
            value={eachRoom}
            style={{ justifyContent: 'center' }}
          >
            {eachRoom}호
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface SelectRoomProps {
  floor: string;
  room: string[];
}

const SelectRoom: FC<SelectRoomProps> = ({ floor, room }) => {
  if (floor === '') {
    return (
      <div>
        <DefaultRoom />
      </div>
    );
  }

  return (
    <div>
      <ValidRoom roomsArray={room} />
    </div>
  );
};

export default SelectRoom;
