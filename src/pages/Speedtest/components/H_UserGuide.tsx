import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { maxWidth } from '../../../constant/constants';

const StyledUserGuide = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const StyledTitleTypography = styled(Typography)({
  color: '#1976d2',
  textAlign: 'center',
});

const StyledUserGuideTypography = styled(Typography)({
  color: '#1976d2',
  textAlign: 'center',
});

const StyledLocationOnIcon = styled(LocationOnIcon)({
  width: '30px',
  height: '30px',
  [`@media (max-width: ${maxWidth}px)`]: {
    width: '20px',
    height: '20px',
  },
});

const UserGuide = () => {
  return (
    <StyledUserGuide>
      <StyledTitleTypography variant="h5">사용방법</StyledTitleTypography>
      <StyledUserGuideTypography variant="h5">
        Floor → Room → <StyledLocationOnIcon /> → Start
      </StyledUserGuideTypography>
    </StyledUserGuide>
  );
};

export default UserGuide;
