
import toHex from 'colornames';

export const getColorCode = (colorName) => {
  return toHex(colorName);
};

/**
 * https://css-tricks.com/snippets/javascript/lighten-darken-color/
 */
export const lightenDarkenColor = (color, amt) => {
  let usePound = false;
  let col = color;
  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  /* eslint-disable-next-line no-bitwise */
  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  /* eslint-disable-next-line no-bitwise */
  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  /* eslint-disable-next-line no-bitwise */
  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  /* eslint-disable-next-line no-bitwise */
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const preLightenDarkenColor = (color) => {
  const darkenColor = lightenDarkenColor(color, -50);
  if (darkenColor && darkenColor.length === 7) {
    return darkenColor;
  }
  return lightenDarkenColor(color, -10);
};
