export type Breakpoint = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type BreakpointPxValue = string;

export type ColorName = 'primary' | 'secondary' | 'tertiary';
export type ColorValue = string;
export type ColorShade = 'default' | number;

export type Spacings = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface Theme {
  breakpoints: {
    [key in Breakpoint]: BreakpointPxValue;
  };
  colors: {
    [key in ColorName]: {
      [key in ColorShade]: ColorValue;
    };
  };
  spacings: {
    [key in Spacings]: string;
  };
}
