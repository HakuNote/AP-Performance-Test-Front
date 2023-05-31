import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import {
  startToggleState,
  floorState,
  roomState,
  locationClassState,
  cookieState,
  speedTestDataState,
} from '../../../../module/Atom';
import SpeedtestManager from '../../../../librespeed/SpeedtestManager';
import sendDataToServer from './sendSpeedDataToServer';

const StartButton = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useRecoilState(startToggleState);

  const floorNumber = useRecoilValue<string>(floorState);
  const roomNumber = useRecoilValue(roomState);
  const locationClass = useRecoilValue(locationClassState);
  const userCookie = useRecoilValue(cookieState);

  const [endCalled, setEndCalled] = useState(false);
  const speedTestData = useRecoilValue(speedTestDataState);

  const speedtestManager = SpeedtestManager(
    () => {
      console.log('select server');
    },
    () => {
      console.log('on end');
      setEndCalled(true);
    }
  );
  useEffect(() => {
    if (endCalled) {
      sendDataToServer({
        ...speedTestData,
        floorNumber,
        roomNumber,
        locationClass,
        userCookie,
      });
      console.log(speedTestData);
      setEndCalled(false);
    }
  }, [endCalled, speedTestData]);

  const onClickStartButton = async () => {
    if (floorNumber === '' || roomNumber === '' || locationClass === '') {
      setPopupOpen(true);
    } else {
      setStartToggle(false);
      try {
        speedtestManager.handleClick();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupClose = () => {
    setPopupOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '66px',
      }}
    >
      <Button
        onClick={onClickStartButton}
        variant="contained"
        sx={{
          fontSize: '2rem',
          '@media (max-width:600px)': {
            fontSize: '2rem',
          },
          borderRadius: '15px',
          width: '300px',
          '&:hover': {
            backgroundColor: '#FFF',
            color: startToggle ? '#1976d2' : '#FF0000',
          },
          height: '50px',
          backgroundColor: startToggle ? '' : '#FF0000',
          color: startToggle ? '' : '#FFF',
        }}
      >
        {startToggle ? 'START' : 'Abort'}
      </Button>

      <Dialog open={popupOpen} onClose={popupClose}>
        <DialogTitle>위치 설정을 먼저 해주세요.</DialogTitle>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={popupClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StartButton;
