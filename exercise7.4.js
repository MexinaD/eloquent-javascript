function possibleDirections(from) {
  var mapSize = 20;
  function insideMap(point) {
    return point.x >= 0 && point.x < mapSize &&
           point.y >= 0 && point.y < mapSize;
  }

  var directions = [point(-1, 0), point(1, 0), point(0, -1),
                    point(0, 1), point(-1, -1), point(-1, 1),
                    point(1, 1), point(1, -1)];
  return filter(insideMap, map(partial(addPoints, from),
                               directions));
}

console.log(possibleDirections(point(0, 0)));