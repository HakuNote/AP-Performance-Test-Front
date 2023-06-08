import { useRecoilValue } from 'recoil';
import { Box, Container } from '@mui/material';

import ShowSpeed from './B_Show_Speed/B_ShowSpeed';
import StartButton from './B_Start_Button/B_StartButton';
import SelectUserLocation from './B_Select_User_Location/B_SelectUserLocation';
import SelectClass from './B_Select_Class/B_SelectClass';

import { startToggleState } from '../../../recoil/Atom';

const Body = () => {
  const startToggle = useRecoilValue(startToggleState);

  return (
    <Container>
      {startToggle ? (
        <Box>
          <SelectUserLocation />
          <SelectClass />
        </Box>
      ) : (
        <ShowSpeed />
      )}
      <StartButton />
    </Container>
  );
};

export default Body;
