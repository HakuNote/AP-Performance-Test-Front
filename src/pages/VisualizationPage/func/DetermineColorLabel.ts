const colorTable: string[] = ['blue', 'orange', 'red'];

// download 속도를 입력받아서 해당하는 색깔 반환
// DetermineRoomColor에서 호출되는 함수
const DetermineColorLabel = (dlStatus: number): string => {
  if (dlStatus >= 100) {
    return colorTable[0];
  }
  if (dlStatus >= 30) {
    return colorTable[1];
  }
  if (dlStatus >= 0) {
    return colorTable[2];
  }

  // 속도 데이터 아예 없는 경우
  return 'black';
};

export default DetermineColorLabel;
