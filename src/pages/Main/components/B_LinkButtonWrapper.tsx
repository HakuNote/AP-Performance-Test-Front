import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

import LinkButton from './B_LinkButton';

const StyledBox = styled(Box)({
  display: 'flex',
  marginTop: '1rem',
});

const StyledFGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const StyledSGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
});

const LinkButtonWrapper = () => {
  return (
    <StyledBox>
      <Grid container spacing={2}>
        <StyledFGrid item xs={6}>
          <LinkButton to="/speed-test" label="측정하기" />
        </StyledFGrid>
        <StyledSGrid item xs={6}>
          <LinkButton to="/visualization" label="속도지도" />
        </StyledSGrid>
      </Grid>
    </StyledBox>
  );
};

export default LinkButtonWrapper;
