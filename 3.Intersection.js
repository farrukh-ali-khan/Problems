function intersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  if ((x1 == x2 && y1 == y2) || (x3 == x4 && y3 == y4)) {
    console.log("Input doesn't represent two lines.");
  }
  var disc = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (disc == 0) {
    if (x1 == x2 && x2 == x3 && x3 == x4) {
      // # Lines coincide vertically. Return one coinciding point.
      return x1, y1;
    }
    if (y1 == y2 && y2 == y3 && y3 == y4) {
      // # Lines coincide horizontally. Return one coinciding point.
      return x1, y1;
    }
    if ((y1 - x1) * (x4 - x2) == (y2 - x2) * (x3 - x1)) {
      // # Lines coincide diagonally. Return one coinciding point.
      return x1, y1;
    }
    // # If the discriminant is zero, the two lines are parallel to each
    // # other. Therefore, depending on your definitions the lines don't
    // # intersect, or they intersect at infinity, introducing a
    // # non-Euclidian geometry. I choose the latter.
    return console.log("Lines meet at infinity");
  }
  // # Discriminant is non-zero, hence there is one intersecting point.
  return (
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x3 * y4 - y3 * x4) * (x1 - x2)) / disc,
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (x3 * y4 - y3 * x4) * (y1 - y2)) / disc
  );
}

console.log(intersection(1,2,1,2,5,6,7,8));