const oscillate = (): number => {
  const ret = 1 + 0.02 * Math.sin(Date.now() / 100);
  return ret;
};

export default oscillate;
