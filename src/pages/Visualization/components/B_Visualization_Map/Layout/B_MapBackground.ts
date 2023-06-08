import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface MapBackgroundProps {
  width: string;
  height: string;
  backgroundColor: string;
  gridColumn?: string;
  gridRow?: string;
}

const MapBackground = styled(Box, {
  shouldForwardProp: prop => prop !== 'gridColumn' && prop !== 'gridRow',
})<MapBackgroundProps>(
  ({ width, height, backgroundColor, gridColumn, gridRow }) => ({
    width,
    height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
    gridColumn,
    gridRow,
  })
);

export default MapBackground;
