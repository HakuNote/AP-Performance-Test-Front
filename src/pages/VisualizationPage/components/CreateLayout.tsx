import { FC, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useRecoilState, useRecoilValue } from 'recoil';
import { floorState, dayOfWeekState } from '../../../module/Atom';
import PushDataToMap from '../func/PushDataToMap';
// import FxLayout from './Layout/FxLayout';
import F4Layout from './Layout/F4Layout';
import F5Layout from './Layout/F5Layout';
import F6Layout from './Layout/F6Layout';

const CreateLayout: FC = () => {
  // API로 부터 데이터 요청후 저장
  // PushDataToMap();

  const userChoosedFloor = useRecoilValue(floorState);
  const [floor, setFloor] = useState<number | null>(
    parseInt(userChoosedFloor, 10)
  );
  const [curDay, setCurDay] = useRecoilState(dayOfWeekState);

  const floorLayouts: { [key: number]: FC } = {
    4: F4Layout,
    5: F5Layout,
    6: F6Layout,
  };

  const handleChangeFloor = (event: SelectChangeEvent<number>) => {
    const selectedFloor = Number(event.target.value);
    setFloor(selectedFloor);
  };

  const handleChangeDay = (event: SelectChangeEvent<number>) => {
    const selectedDayOfWeek = Number(event.target.value);
    setCurDay(selectedDayOfWeek);
    console.log(selectedDayOfWeek);
  };

  const SelectedLayout = floor ? floorLayouts[floor] : null;

  function getDayOfWeek(inday: number) {
    switch (inday) {
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';
      case 7:
        return '일';
      default:
        return '';
    }
  }

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box style={{ marginBottom: '16px' }}>
        <FormControl fullWidth sx={{ width: '150px' }} margin="normal">
          <InputLabel id="층">층 선택</InputLabel>
          <Select
            labelId="floor-select-label"
            id="floor-select"
            value={floor || ''}
            onChange={handleChangeFloor}
            label="-----"
            renderValue={selected => (
              <div style={{ textAlign: 'center' }}>{selected}층</div>
            )}
            sx={{ width: '150px', height: '60px', fontSize: '2rem' }}
          >
            <MenuItem value={4}>4층</MenuItem>
            <MenuItem value={5}>5층</MenuItem>
            <MenuItem value={6}>6층</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ width: '150px' }} margin="normal">
          <InputLabel id="">요일 선택</InputLabel>
          <Select
            labelId="floor-select-label"
            value={floor || ''}
            onChange={handleChangeDay}
            label="------"
            renderValue={() => (
              <div style={{ textAlign: 'center' }}>
                {getDayOfWeek(curDay)}요일
              </div>
            )}
            sx={{ width: '150px', height: '60px', fontSize: '2rem' }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map(tday => (
              <MenuItem key={tday} value={tday}>
                {getDayOfWeek(tday)}요일
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>{SelectedLayout && <SelectedLayout />}</Box>
    </Container>
  );
};

export default CreateLayout;
