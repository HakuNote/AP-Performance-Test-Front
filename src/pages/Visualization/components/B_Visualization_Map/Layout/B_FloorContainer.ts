import { Box } from '@mui/material';
import styled from '@emotion/styled';

const FloorContainer = styled(Box)({
  display: 'grid', // 그리드 레이아웃을  사용하도록 컨테이너를 설정합니다.
  gridTemplateColumns: 'repeat(350, 1px)', // 그리드의 열 수를 350개로 설정하고, 각 열의 너비를 1px로 지정합니다.
  gridAutoRows: '1px', // 그리드의 각 행의 높이를 1px로 지정합니다.
  // gap: 0.5, // (주석 처리) 그리드 항목 사이의 간격을 지정합니다. (이 코드에서는 사용되지 않음)
  justifyContent: 'center', // 컨테이너 내에서 그리드 항목을 수평으로 가운데 정렬합니다.
  alignItems: 'center', // 컨테이너 내에서 그리드 항목을 수직으로 가운데 정렬합니다.
  margin: 'auto', // 컨테이너를 수평으로 부모 요소 내에서 가운데 정렬합니다.
  position: 'relative', // 컨테이너의 위치 지정 컨텍스트를 상대적으로 설정합니다.
  flexWrap: 'wrap', // 그리드 항목이 가로 공간이 부족한 경우 다음 줄로 넘어갈 수 있도록 합니다.
});

export default FloorContainer;
