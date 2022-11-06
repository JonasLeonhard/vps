import { Theme, Breakpoint } from '@types';

const mq =
  (breakpoint: Breakpoint, minMax: 'min' | 'max' = 'min') =>
  ({ theme }: { theme: Theme }) => {
    return `@media (${minMax}-width: ${theme.breakpoints[breakpoint]}`;
  };

export default mq;
