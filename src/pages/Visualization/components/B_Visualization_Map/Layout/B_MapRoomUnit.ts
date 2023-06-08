import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface MapRoomUnitProps {
  width: string;
  height: string;
  backgroundColor: string;
  gridColumn: string;
  gridRow: string;
}

const MapRoomUnit = styled(Box)<MapRoomUnitProps>(
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

export default MapRoomUnit;
