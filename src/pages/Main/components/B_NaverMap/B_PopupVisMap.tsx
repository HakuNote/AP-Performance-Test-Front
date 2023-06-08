import styled from '@emotion/styled';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import CreateVisMap from '../../../Visualization/components/B_CreateVisMap';

interface PopupVisMapProps {
  buildingName: string;
  open: boolean;
  popUpCloseClick: () => void;
}

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: '15px',
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
});

const PopupVisMap: React.FC<PopupVisMapProps> = ({
  open,
  buildingName,
  popUpCloseClick,
}) => {
  const handleClose = () => {
    popUpCloseClick();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography fontSize={25}>{buildingName}</Typography>
      </StyledDialogTitle>
      <DialogContent>
        <CreateVisMap />
      </DialogContent>
      <StyledDialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">
          닫기
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default PopupVisMap;
