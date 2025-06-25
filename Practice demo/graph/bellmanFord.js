function bellmanFord(vertices, edges, source) {
  const dist = {};

  // Step 1: Initialize distances
  for (let v of vertices) {
    dist[v] = Infinity;
  }
  dist[source] = 0;

  // Step 2: Relax all edges (V - 1 times)
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  // Step 3: Check for negative weight cycle
  for (let [u, v, weight] of edges) {
    if (dist[u] + weight < dist[v]) {
      return "Negative weight cycle detected!";
    }
  }

  return dist;
}
