// 사용자가 호실을 클릭했을때 나오는 세부 Class 색상레이블 팝업메시지
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from '@mui/material';

import { useRecoilValue, SetterOrUpdater } from 'recoil';

import { popUpFloorState, popUpRoomState } from '../../../module/Atom';

import ClassFrame from './ClassFrame';

interface PopupMessageProps {
  open: boolean;
  // popUpOpenClick은 popUpMessage에서 필요 없음 추후 삭제
  popUpOpenClick: () => void;
  popUpCloseClick: () => void;
  setPopUpFloorState: SetterOrUpdater<string>;
  setPopUpRoomState: SetterOrUpdater<string>;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
  open,
  popUpCloseClick,
}) => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  const handleClose = () => {
    popUpCloseClick();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" justifyContent="center">
            <Typography fontSize={25}>
              {popUpFloor}층 {popUpRoom}호
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <br />
          <ClassFrame />
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupMessage;
