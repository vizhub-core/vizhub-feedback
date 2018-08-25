// Shrink and grow to fill available width.
export const computeScale = (boundsWidth, width) => boundsWidth / width;

// Alternative behavior: Shrink if necessary. Do not grow.
//  boundsWidth > width
//    ? 1
//    : boundsWidth / width
