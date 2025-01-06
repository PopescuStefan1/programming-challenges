/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

function calculateDistanceToOrigin(points) {
  if (!points) {
    return Number.MAX_SAFE_INTEGER;
  }

  return Math.sqrt(Math.pow(points[0] - 0, 2) + Math.pow(points[1] - 0, 2));
}

var kClosest = function (points, k) {
  const heap = [];

  // Grow the heap
  for (let pointPair of points) {
    heap.push(pointPair);

    // Bubble up
    let pos = heap.length - 1;
    let parent = Math.floor((pos - 1) / 2);
    let currDistance = calculateDistanceToOrigin(pointPair);
    let parentDistance;
    if (parent >= 0) {
      parentDistance = calculateDistanceToOrigin(heap[parent]);
    }
    while (parent >= 0 && currDistance < parentDistance) {
      [heap[pos], heap[parent]] = [heap[parent], heap[pos]];
      pos = parent;
      parent = Math.floor((pos - 1) / 2);
      parentDistance = calculateDistanceToOrigin(heap[parent]);
    }
  }

  const result = [];
  // Shrink the heap
  while (k > 0 && heap.length > 0) {
    result.push(heap[0]);

    heap[0] = heap[heap.length - 1];
    heap.pop();

    // Bubble down
    let pos = 0;
    let currDistance = calculateDistanceToOrigin(heap[pos]);
    let minChild;
    if (
      calculateDistanceToOrigin(heap[pos * 2 + 1]) < calculateDistanceToOrigin(heap[pos * 2 + 2]) ||
      pos * 2 + 2 >= heap.length
    ) {
      minChild = pos * 2 + 1;
    } else {
      minChild = pos * 2 + 2;
    }
    let minDistance = calculateDistanceToOrigin(heap[minChild]);
    while (currDistance > minDistance && minDistance < Number.MAX_SAFE_INTEGER) {
      [heap[pos], heap[minChild]] = [heap[minChild], heap[pos]];

      pos = minChild;
      if (
        calculateDistanceToOrigin(heap[pos * 2 + 1]) < calculateDistanceToOrigin(heap[pos * 2 + 2]) ||
        pos * 2 + 2 >= heap.length
      ) {
        minChild = pos * 2 + 1;
      } else {
        minChild = pos * 2 + 2;
      }

      minDistance = calculateDistanceToOrigin(heap[minChild]);
    }

    k--;
  }

  return result;
};
