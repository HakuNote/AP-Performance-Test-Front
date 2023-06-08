import styled from '@emotion/styled';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

import { maxWidth } from '../../../constant/constants';

const StyledTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  [`@media (max-width: ${maxWidth}px)`]: {
    marginBottom: '0px',
  },
});

const StyledAppBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'white',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'center',
  paddingTop: '20px',
});

const StyledNetworkCheckIcon = styled(NetworkCheckIcon)({
  color: '#1976d2',
  width: '65px',
  height: '65px',
  marginRight: '12px',
  [`@media (max-width: ${maxWidth}px)`]: {
    width: '40px',
    height: '40px',
  },
});

const StyledTypography = styled(Typography)({
  color: '#1976d2',
  textAlign: 'center',
});

const Title = () => {
  return (
    <StyledTitle>
      <StyledAppBar position="relative" color="primary">
        <StyledToolbar>
          <StyledNetworkCheckIcon />
          <StyledTypography variant="h3">인터넷 속도 측정도구</StyledTypography>
        </StyledToolbar>
      </StyledAppBar>
    </StyledTitle>
  );
};

export default Title;
