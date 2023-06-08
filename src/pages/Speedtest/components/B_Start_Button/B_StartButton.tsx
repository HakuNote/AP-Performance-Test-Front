import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import { startToggleState } from '../../../../recoil/Atom';
import SpeedtestManager from '../../../../librespeed/SpeedtestManager';

import useCheckUserSelect from '../../../../hooks/useCheckUserSelect';
import useMakeMesuredData from '../../../../hooks/useMakeMesuredData';
import SendDataToServer from '../func/SendDataToServer';

import StartButtonPopUp from './B_StartButtonPopUp';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10vh',
});

const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'startToggle',
})<{ startToggle: boolean }>(({ startToggle }) => ({
  fontSize: '2rem',
  borderRadius: '15px',
  width: '300px',
  height: '50px',
  backgroundColor: startToggle ? '' : '#ff0000',
  color: startToggle ? '' : '#FFF',
  transition: 'background-color 0.5s, color 0.5s',
  '&:hover': {
    backgroundColor: '#FFF',
    color: startToggle ? '#1976d2' : '#ff0000',
  },
}));

const StartButton = () => {
  const [measureEndCalled, setMeasureEndCalled] = useState(false);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useRecoilState(startToggleState);

  const checkUserSelect = useCheckUserSelect();
  const makedSendData = useMakeMesuredData();

  const speedtestManager = SpeedtestManager(
    () => {
      console.log('select server');
    },
    () => {
      console.log('on end');
      setMeasureEndCalled(true);
    }
  );

  const onClickStartButton = async () => {
    if (!checkUserSelect) {
      setPopupOpen(true);
    } else {
      setStartToggle(false);
      speedtestManager.handleClick();
    }
  };

  const popupClose = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (measureEndCalled) {
      setMeasureEndCalled(false);
      SendDataToServer(makedSendData);
    }
  }, [measureEndCalled, makedSendData]);

  return (
    <StyledBox>
      <StyledButton
        variant="contained"
        onClick={onClickStartButton}
        startToggle={startToggle}
      >
        {startToggle ? 'START' : 'ABORT'}
      </StyledButton>
      <StartButtonPopUp popupStatus={popupOpen} popupClose={popupClose} />
    </StyledBox>
  );
};

export default StartButton;
