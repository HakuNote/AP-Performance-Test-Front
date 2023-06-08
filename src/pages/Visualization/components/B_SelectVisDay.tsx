import styled from '@emotion/styled';
import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import GetDayOfWeek from '../func/GetDayOfWeek';

const dayIndexArray = [-1, 0, 1, 2, 3, 4, 5, 6];

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

const SelectVisDay: FC<{
  currentDay: number;
  handleChangeDay: (event: SelectChangeEvent<unknown>) => void;
}> = ({ currentDay, handleChangeDay }) => (
  <StyledFormControl fullWidth>
    <InputLabel>요일 선택</InputLabel>
    <StyledSelect
      labelId="floor-select-label"
      value={currentDay}
      label="요일 선택"
      onChange={handleChangeDay}
      renderValue={() => <span>{GetDayOfWeek(currentDay)}</span>}
    >
      {dayIndexArray.map(tday => (
        <MenuItem key={tday} value={tday}>
          {GetDayOfWeek(tday)}
        </MenuItem>
      ))}
    </StyledSelect>
  </StyledFormControl>
);

export default SelectVisDay;
