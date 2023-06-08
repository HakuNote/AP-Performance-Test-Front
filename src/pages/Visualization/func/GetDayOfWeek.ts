const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const getDayOfWeek = (inday: number) => {
  if (inday === -1) {
    return '전체보기';
  }
  if (inday >= 0 && inday <= 6) {
    return daysOfWeek[inday];
  }
  return '';
};

export default getDayOfWeek;
