function floydWarshall(graph) {
  const dist = {};
  const vertices = Object.keys(graph);

  // Step 1: Initialize distance matrix
  for (let i of vertices) {
    dist[i] = {};
    for (let j of vertices) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (graph[i][j] !== undefined) {
        dist[i][j] = graph[i][j];
      } else {
        dist[i][j] = Infinity;
      }
    }
  }

  // Step 2: Apply Floyd-Warshall logic
  for (let k of vertices) {
    for (let i of vertices) {
      for (let j of vertices) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist;
}
