import { Theme, Breakpoint } from '@types';

/*
 * Inserts a MediaQuery at given breakpoint
 * import { mq } from 'styles';
 * @example ${mq('m')};
 * */
const mq =
  (breakpoint: Breakpoint, minMax: 'min' | 'max' = 'min') =>
  ({ theme }: { theme: Theme }) => {
    return `@media (${minMax}-width: ${theme.breakpoints[breakpoint]})`;
  };

export default mq;
