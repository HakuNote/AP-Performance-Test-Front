import { FC, useState } from 'react';
import { Box, Container } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';

import { useRecoilState, useRecoilValue } from 'recoil';
import { floorState, dayOfWeekState } from '../../../recoil/Atom';
import UseSaveDataToLocal from '../../../hooks/useSaveDataToLocal';
import SelectVisFloor from './B_SelectVisFloor';
import SelectVisDay from './B_SelectVisDay';

import F4Layout from './B_Visualization_Map/Layout/B_F4Layout';
import F5Layout from './B_Visualization_Map/Layout/B_F5Layout';
import F6Layout from './B_Visualization_Map/Layout/B_F6Layout';

const CenteredBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CenteredMapBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LAYOUTS: { [key: number]: FC } = {
  4: F4Layout,
  5: F5Layout,
  6: F6Layout,
};

const CreateVisMap: FC = () => {
  UseSaveDataToLocal();

  const userChoosedFloor = useRecoilValue(floorState);
  const [floor, setFloor] = useState<number | null>(
    parseInt(userChoosedFloor, 10)
  );
  const [curDay, setCurDay] = useRecoilState(dayOfWeekState);
  const handleChangeFloor = (event: SelectChangeEvent<unknown>) => {
    setFloor(Number(event.target.value));
  };

  const handleChangeDay = (event: SelectChangeEvent<unknown>) => {
    setCurDay(Number(event.target.value));
  };

  const SelectedMap = floor ? (LAYOUTS as { [key: number]: FC })[floor] : null;
  return (
    <Container>
      <CenteredBox>
        <SelectVisFloor
          inputFloor={floor}
          handleChangeFloor={handleChangeFloor}
        />
        <SelectVisDay currentDay={curDay} handleChangeDay={handleChangeDay} />
      </CenteredBox>
      <CenteredMapBox>{SelectedMap && <SelectedMap />}</CenteredMapBox>
    </Container>
  );
};

export default CreateVisMap;
