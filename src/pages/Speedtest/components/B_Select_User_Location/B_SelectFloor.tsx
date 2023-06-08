import { useRecoilState, useSetRecoilState } from 'recoil';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { floorState, roomState } from '../../../../recoil/Atom';

const StyledFormControl = styled(FormControl)({
  width: '140px',
});

const StyledMenuItem = styled(MenuItem)({
  justifyContent: 'center',
});

// floor 정보 배열 받아서 그대로 선택 가능하게 출력
const SelectFloor = ({ floorArray }: { floorArray: string[] }) => {
  const [floor, setFloor] = useRecoilState(floorState);
  const setRoom = useSetRecoilState(roomState);

  const floorOnChange = (event: SelectChangeEvent) => {
    setFloor(event.target.value as string);
    setRoom('');
  };

  return (
    <StyledFormControl margin="normal">
      <InputLabel>Floor</InputLabel>
      <Select
        value={floor}
        label="Floor"
        onChange={floorOnChange}
        renderValue={selected => (
          <div style={{ textAlign: 'center' }}>{selected}층</div>
        )}
      >
        {floorArray.map(eachFloor => (
          <StyledMenuItem key={eachFloor} value={eachFloor}>
            {eachFloor}층
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default SelectFloor;
