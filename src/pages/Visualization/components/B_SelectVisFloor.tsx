import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';

const floorArray = [4, 5, 6];
const StyledFormControl = styled(FormControl)({
  width: '150px',
  margin: '16px',
});

const StyledSelect = styled(Select)({
  width: '150px',
  height: '50px',
  fontSize: '1rem',
  textAlign: 'center',
});

const SelectVisFloor: FC<{
  inputFloor: number | null;
  handleChangeFloor: (event: SelectChangeEvent<unknown>) => void;
}> = ({ inputFloor, handleChangeFloor }) => (
  <StyledFormControl fullWidth>
    <InputLabel id="층">층 선택</InputLabel>
    <StyledSelect
      labelId="floor-select-label"
      id="floor-select"
      value={inputFloor || ''}
      onChange={handleChangeFloor}
      label="층 선택"
      renderValue={selected => <div>{String(selected)}층</div>}
    >
      {floorArray.map(selectedFloor => (
        <MenuItem key={selectedFloor} value={selectedFloor}>
          {selectedFloor}층
        </MenuItem>
      ))}
    </StyledSelect>
  </StyledFormControl>
);

export default SelectVisFloor;
