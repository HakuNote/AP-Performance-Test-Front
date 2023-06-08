import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useRecoilValue, SetterOrUpdater } from 'recoil';
import styled from '@emotion/styled';

import { popUpFloorState, popUpRoomState } from '../../../../recoil/Atom';
import ClassFrame from './B_ClassFrame';

interface PopupMessageProps {
  open: boolean;
  popUpOpenClick: () => void;
  popUpCloseClick: () => void;
  setPopUpFloorState: SetterOrUpdater<string>;
  setPopUpRoomState: SetterOrUpdater<string>;
}

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
});

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: '15px',
  },
});

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
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography fontSize={25}>
          {popUpFloor}층 {popUpRoom}호
        </Typography>
      </StyledDialogTitle>
      <DialogContent>
        <ClassFrame />
      </DialogContent>
      <StyledDialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">
          닫기
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default PopupMessage;
