// Shrink if necessary. Do not grow.
export const computeScale = (boundsWidth, width) => (
  boundsWidth > width
    ? 1
    : boundsWidth / width
);
