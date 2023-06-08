const Black = '#000000';
const colorArray: string[] = [
  '#3fd031',
  '#4fd22e',
  '#5dd529',
  '#6ed727',
  '#7fda24',
  '#91dc23',
  '#a6df22',
  '#bae11d',
  '#cfe31b',
  '#e6e61a',
  '#e9d316',
  '#ebc015',
  '#eeac11',
  '#f0960e',
  '#f3800c',
  '#f5680a',
  '#f85008',
  '#fa3505',
  '#fd1c03',
  '#ff0000',
];

// download 속도를 입력받아서 해당하는 색깔 반환
// DetermineRoomColor에서 호출되는 함수
const DetermineColorLabel = (dlStatus: number): string => {
  // console.log('들어온 속도 : ');
  // console.log(' - - ', dlStatus);
  if (Number.isNaN(dlStatus)) {
    // 측정데이터 없는경우 black 리턴
    return Black;
  }
  const thresholds = [
    80, 70, 65, 60, 55, 50, 45, 40, 35, 30, 26, 22, 18, 14, 10, 7, 5, 3, 1, 0,
  ];

  const colorIndex = thresholds.findIndex(threshold => dlStatus >= threshold);
  return colorArray[colorIndex];
};

export default DetermineColorLabel;
