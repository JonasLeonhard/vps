/**
 * Get the percentage of an element that's currently been seen in the viewport.
 */
const getPercentageOfViewport = (element: HTMLElement, innerHeight: number, scrollY: number) => {
  if (!element) return 0;

  // Get the relevant measurements and positions
  const viewportHeight = innerHeight;
  const scrollTop = scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight; // was offsetHeight

  // Calculate percentage the element takes up in the current viewport
  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));

  // Restrict the range to between 0 and 100
  return Math.min(100, Math.max(0, percentage));
};

export default getPercentageOfViewport;
