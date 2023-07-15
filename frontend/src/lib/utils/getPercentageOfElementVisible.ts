const getPercentageOfElementVisible = (
  element: HTMLElement,
  innerHeight: number,
  scrollY: number
) => {
  if (!element) return 0;
  // Get the relevant measurements and positions
  const viewportHeight = innerHeight;
  const scrollTop = scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;
  // Calculate the visible height of the element
  const visibleHeight = Math.min(elementHeight, scrollTop + viewportHeight - elementOffsetTop);
  // Calculate the percentage of the element that is visible
  const percentage = Math.round((visibleHeight / elementHeight) * 100);
  // Restrict the range to between 0 and 100
  return Math.min(100, Math.max(0, percentage));
};

export default getPercentageOfElementVisible;
