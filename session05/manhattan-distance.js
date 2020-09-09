// https://www.codewars.com/kata/52998bf8caa22d98b800003a

function manhattanDistance(pointA, pointB) {
  //TODO
  // destructure each coordinate
  const [ax, ay] = pointA;
  const [bx, by] = pointB;
  // a place to store x and y distances
  let dx, dy;
  // compare x positions
  if (ax > bx) {
    // if point a x > point b x substract b from a
    dx = ax - bx;
  } else if (ax < bx) {
    // if point a x < point b x add the two together
    dx = bx - ax;
  } else {
    // if they are equal, distanceX is 0
    dx = 0;
  }
  // repeat for y points
  if (ay > by) {
    dy = ay - by;
  } else if (ay < by) {
    dy = by - ay;
  } else {
    dy = 0;
  }
  // add distances together and return them
  return dx + dy;
}

function manhattanDistance(pointA, pointB) {
  const [ax, ay] = pointA;
  const [bx, by] = pointB;
  let dx, dy;
  if (ax > bx) {
    dx = ax - bx;
  } else if (ax < bx) {
    dx = bx - ax;
  } else {
    dx = 0;
  }
  if (ay > by) {
    dy = ay - by;
  } else if (ay < by) {
    dy = by - ay;
  } else {
    dy = 0;
  }
  return dx + dy;
}

function manhattanDistance(pointA, pointB) {
  const [ax, ay] = pointA;
  const [bx, by] = pointB;
  const dy = ax > bx ? ax - bx : ax < bx ? bx - ax : 0;
  const dx = ay > by ? ay - by : ay < by ? by - ay : 0;
  return dx + dy;
}

function manhattanDistance(pointA, pointB) {
  const [ax, ay] = pointA;
  const [bx, by] = pointB;

  function getDistance(x1, x2) {
    return x1 > x2 ? x1 - x2 : x1 < x2 ? x2 - x1 : 0;
  }

  return getDistance(ax, bx) + getDistance(ay, by);
}

function manhattanDistance(pointA, pointB) {
  const [ax, ay] = pointA;
  const [bx, by] = pointB;
  return [
    [ax, bx],
    [ay, by],
  ].reduce(
    (d, p) => (d += p[0] > p[1] ? p[0] - p[1] : p[0] < p[1] ? p[1] - p[0] : 0),
    0
  );
}

function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

console.log(manhattanDistance([1, 1], [1, 1]), 0);
console.log(manhattanDistance([5, 4], [3, 2]), 4);
console.log(manhattanDistance([1, 1], [0, 3]), 3);
console.log(manhattanDistance([1, 1], [3, 3]), 4);
