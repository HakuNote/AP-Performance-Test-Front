import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';

interface StartButtonPopUpProps {
  popupStatus: boolean;
  popupClose: () => void;
}

const StartButtonPopUp = ({
  popupStatus = false,
  popupClose,
}: StartButtonPopUpProps) => {
  return (
    <Dialog open={popupStatus} onClose={popupClose}>
      <DialogTitle>위치 설정을 먼저 해주세요.</DialogTitle>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={popupClose}>확인</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartButtonPopUp;
