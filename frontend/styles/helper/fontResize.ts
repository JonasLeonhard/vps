/**
 * @param {number} minWidthPx - px viewport width where clamp minFontSize will stop decreasing further below minFontSize
 * @param {number} maxWidthPx - px viewport width where clamp maxFontSize will stop increasing further above maxFontSize
 * @param {number} minFontSize - rem FontSize minimum
 * @param {number} maxFontSize - rem FontSize maximum
 * @example font-size: ${fontResize(300, 675, 0.9, 1)} returns font-size: clamp( 0.9rem,0.8978201634877384rem + 0.24220405691795333vw,1rem ), clamp between 300px and 675px
 */
const fontResize = (
  minWidthPx: number,
  maxWidthPx: number,
  minFontSize: number,
  maxFontSize: number
) => {
  const pixelsPerRem = 16;
  const minWidth = minFontSize;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem )`;
};

export default fontResize;
