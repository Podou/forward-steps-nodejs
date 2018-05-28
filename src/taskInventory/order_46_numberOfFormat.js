
const numberOfFormat = (enterNum = 0) => {
  let num = enterNum;
  if (num < 1000) {
    return num;
  }

  num = num / 1000;
  if (num < 1000) {
    return `${parseFloat(num.toFixed(2))}K`;
  }

  num = num / 1000;
  if (num < 1000) {
    return `${parseFloat(num.toFixed(2))}M`;
  }

  num = num / 1000;
  if (num < 1000) {
    return `${parseFloat(num.toFixed(2))}G`;
  }

  num = num / 1000;
  if (num < 1000) {
    return `${parseFloat(num.toFixed(2))}T`;
  }

  num = num / 1000;
  if (num < 1000) {
    return `${parseFloat(num.toFixed(2))}P`;
  }
  return num;
};

export default numberOfFormat;
