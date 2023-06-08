import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { maxWidth } from '../../../constant/constants';

const StyledBox = styled(Box)({
  textAlign: 'center',
  marginTop: '2rem',
  [`@media (max-width: ${maxWidth}px)`]: {
    marginTop: '1rem',
  },
});

const StyledTypography = styled(Typography)({
  color: '#1976d2',
  marginBottom: '1.5rem',
});

const Summary = () => {
  return (
    <StyledBox>
      <StyledTypography variant="h5">
        인터넷 속도 측정과 속도 지도를 제공합니다.
      </StyledTypography>
      <StyledTypography variant="h5">
        측정하기 - 현재 인터넷 속도 측정
        <br />
        속도지도 - 건물별 속도 확인 하기
      </StyledTypography>
    </StyledBox>
  );
};

export default Summary;
