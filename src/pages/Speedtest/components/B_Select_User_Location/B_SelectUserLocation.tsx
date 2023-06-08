import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider, Grid } from '@mui/material';

import SelectFloor from './B_SelectFloor';
import SelectRoom from './B_SelectRoom';

import { floorState } from '../../../../recoil/Atom';

import F4Rooms from '../../../../data/RoomsData/F4Rooms.json';
import F5Rooms from '../../../../data/RoomsData/F5Rooms.json';
import F6Rooms from '../../../../data/RoomsData/F6Rooms.json';

const StyledGrid1 = styled(Grid)`
  && {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledGrid2 = styled(Grid)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;

const SelectTheme = createTheme({
  typography: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: 14,
  },
});

const floorArray = ['4', '5', '6'];

const SelectUserLocatin = () => {
  const floor = useRecoilValue(floorState);
  let room: string[] = []; // 초기값을 빈 배열로 설정

  // 이 부분 수정 필요 동적으로 파일 넣는방법?
  if (floor === '4') {
    room = F4Rooms;
  } else if (floor === '5') {
    room = F5Rooms;
  } else if (floor === '6') {
    room = F6Rooms;
  }

  return (
    <ThemeProvider theme={SelectTheme}>
      <Grid container spacing={1}>
        <StyledGrid1 item xs={6} sm={6}>
          <SelectFloor floorArray={floorArray} />
        </StyledGrid1>
        <StyledGrid2 item xs={6} sm={6}>
          <SelectRoom floor={floor} room={room} />
        </StyledGrid2>
      </Grid>
    </ThemeProvider>
  );
};

export default SelectUserLocatin;
