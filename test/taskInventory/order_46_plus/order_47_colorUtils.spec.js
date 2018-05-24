
import * as colorUtils from '../../../src/taskInventory/order_47_colorUtils';

const blueCode = colorUtils.getColorCode('blue');
console.log(
  'Blue',
  blueCode,
  colorUtils.lightenDarkenColor(blueCode, -50),
  colorUtils.preLightenDarkenColor(blueCode),
);

const greenCode = colorUtils.getColorCode('green');
console.log(
  'Green',
  greenCode,
  colorUtils.lightenDarkenColor(greenCode, -50),
  colorUtils.preLightenDarkenColor(greenCode),
);

const redCode = colorUtils.getColorCode('red');
console.log(
  'Red',
  redCode,
  colorUtils.lightenDarkenColor(redCode, -50),
  colorUtils.preLightenDarkenColor(redCode),
);
