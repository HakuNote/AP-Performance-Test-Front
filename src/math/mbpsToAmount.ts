const mbpsToAmount = (s: number): number => {
  const ret = 1 - 1 / 1.3 ** Math.sqrt(s);
  return ret;
};

export default mbpsToAmount;
