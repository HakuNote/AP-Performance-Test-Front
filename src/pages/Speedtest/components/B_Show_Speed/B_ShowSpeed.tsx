import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { speedTestDataFromServerState } from '../../../../recoil/Atom';
import ResultCard from './B_ResultCard';

const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledBox = styled(Box)({
  maxWidth: '700px',
});

const ShowSpeed = () => {
  const speedTestData = useRecoilValue(speedTestDataFromServerState);

  const dlParam = {
    status: speedTestData.dlStatus,
    state: speedTestData.testState,
  };
  const ulParam = {
    status: speedTestData.ulStatus,
    state: speedTestData.testState,
  };

  return (
    <StyledContainer>
      <StyledBox>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Ping(ms)"
              footer={`${speedTestData.pingStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Jitter(ms)"
              footer={`${speedTestData.jitterStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Download(mbps)"
              body={dlParam}
              footer={`${speedTestData.dlStatus}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ResultCard
              header="Upload(mbps)"
              body={ulParam}
              footer={`${speedTestData.ulStatus}`}
            />
          </Grid>
        </Grid>
      </StyledBox>
    </StyledContainer>
  );
};

export default ShowSpeed;
