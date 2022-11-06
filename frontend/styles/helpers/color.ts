import { ColorName, ColorShade, Theme } from '@types';

/**
 * Gets color with shade from theme
 * import { color } from 'styles';
 * @example color('primary'); color('primary', 10)
 */
const color =
  (colorName: ColorName, colorShade: ColorShade = 'default') =>
  ({ theme }: { theme: Theme }) => {
    return theme.colors[colorName][colorShade];
  };

export default color;
