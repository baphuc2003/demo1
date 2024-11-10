import { Queue } from "./Queue.js";

class FriendNetwork {
  constructor() {
    this.friends = {};
  }

  addPerson(name) {
    if (!this.friends[name]) {
      this.friends[name] = [];
    }
  }

  addFriendship(person1, person2) {
    this.addPerson(person1);
    this.addPerson(person2);

    if (!this.friends[person1].includes(person2)) {
      this.friends[person1].push(person2);
    }
    if (!this.friends[person2].includes(person1)) {
      this.friends[person2].push(person1);
    }
  }

  getFriends(person) {
    return this.friends[person] || [];
  }

  areFriends(person1, person2) {
    return this.friends[person1]?.includes(person2) || false;
  }

  removeFriendship(person1, person2) {
    this.friends[person1] = this.friends[person1].filter(
      (friend) => friend !== person2
    );
    this.friends[person2] = this.friends[person2].filter(
      (friend) => friend !== person1
    );
  }

  getAllPeople() {
    return Object.keys(this.friends);
  }

  dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;

    visited.add(node);

    for (const vertex of graph[node]) {
      this.dfs(graph, vertex, visited);
    }

    return visited;
  }

  bfs(graph, startNode) {
    const queue = new Queue();
    const visited = new Set();
    visited.add(startNode);
    queue.push(startNode);

    while (!queue.isEmpty()) {
      const currentNode = queue.pop();
      for (const vertex of graph[currentNode]) {
        if (!visited.has(vertex)) {
          visited.add(vertex);
          queue.push(vertex);
        }
      }
    }
    return visited;
  }
}

// Sử dụng FriendNetwork
const network = new FriendNetwork();

network.addFriendship("A", "B");
network.addFriendship("A", "C");
network.addFriendship("B", "D");

console.log(network.friends);
console.log("DFS ", network.dfs(network.friends, "A"));

console.log("BFS ", network.bfs(network.friends, "A"));

// console.log("Tất cả mọi người trong mạng lưới:", network.getAllPeople());
// console.log("Bạn bè của Anna:", network.getFriends("Anna"));
// console.log(
//   "Anna và Bob có phải là bạn không?",
//   network.areFriends("Anna", "Bob")
// );
// console.log(
//   "Anna và Diana có phải là bạn không?",
//   network.areFriends("Anna", "Diana")
// );
