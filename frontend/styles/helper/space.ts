/**
 * @param {number} factor - positive amount of theme.spacing
 * @example ${space('s')}
 */
const space =
  (id: "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl") =>
  ({ theme }) => {
    if (!theme.spacing[id]) {
      throw new Error("theme.spacing must be defined ");
    }

    return theme.spacing[id];
  };

export default space;
