import React from 'react';
import styled from '@emotion/styled';
import ReactSpeedometer from 'react-d3-speedometer';
import { Box, Container, Typography } from '@mui/material';

import mbpsToAmount from '../../../../math/mbpsToAmount';
import oscillate from '../../../../math/oscillate';

// for only ulstream, dlstream
interface BodyType {
  status: number;
  state: number;
}

interface ResultCardProps {
  header: string;
  // eslint-disable-next-line react/require-default-props
  body?: BodyType; // body prop을 선택적으로 수정
  footer: string;
}

const StyledContainer = styled(Container)({
  width: '22rem',
  textAlign: 'center',
});

const StyledHeaderTypography = styled(Typography)({
  color: '#1976d2',
});

const StyledFooterTypography = styled(Typography)({
  fontSize: '2em',
  color: 'salmon',
});

const StyledBox = styled(Box)({
  marginTop: '1rem',
});

const ResultCard: React.FC<ResultCardProps> = ({
  header,
  body = undefined,
  footer,
}) => (
  <StyledContainer>
    {/* header */}
    <StyledHeaderTypography>
      <span>{header}</span>
    </StyledHeaderTypography>

    {/* body */}
    {body && (
      <StyledBox>
        <ReactSpeedometer
          height={150}
          minValue={0}
          maxValue={1}
          value={mbpsToAmount(
            body.status * (body.state === 1 ? oscillate() : 1)
          )}
          segments={20}
          needleColor="black"
          needleHeightRatio={0.8}
          startColor="red"
          endColor="LimeGreen"
          maxSegmentLabels={0}
        />
      </StyledBox>
    )}

    {/* footer */}
    <StyledFooterTypography>
      <span>{footer}</span>
    </StyledFooterTypography>
  </StyledContainer>
);

export default ResultCard;
