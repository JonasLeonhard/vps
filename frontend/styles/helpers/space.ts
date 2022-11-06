import { Spacings, Theme } from '@types';

/**
 * Gets space from theme
 * import { space } from 'styles';
 * @example space('xl');
 */
const space =
  (space: Spacings) =>
  ({ theme }: { theme: Theme }) => {
    return theme.spacings[space];
  };

export default space;
