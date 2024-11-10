// A BST is a special kind of binary tree used to organize data in a stored way. It works like a filing cabinet where you can  efficiently search, add, or remove items.


class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}


class BST {
  constructor() {
    this.root = null
  }


  insert(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
      return this
    }
    let pointer = this.root

    while (true) {
      if (newNode.data === pointer.data) {
        return undefined
      }

      if (newNode.data < pointer.data) {

        if (pointer.left === null) {
          pointer.left = newNode
          return this
        } else {
          pointer = pointer.left
        }
      } else {
        if (pointer.right === null) {
          pointer.right = newNode
          return this
        } else {
          pointer = pointer.right
        }
      }
    }
  }



  includes(data) {

    if (!this.root) {
      return false
    }
    let current = this.root

    while (current) {
      if (data === current.data) {
        return true
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }


  bfs() {
    let current = null
    const queue = []
    const values = []

    queue.push(this.root)
    if (!this.root) {
      return []
    }

    while (queue.length !== 0) {
      current = queue.shift()
      // console.log(current.data)
      values.push(current.data)
      if (current.left !== null) {
        queue.push(current.left)
      }
      if (current.right !== null) {
        queue.push(current.right)
      }

    }

    return values

  }

  //iterate solu
  dfs() {

    let stack = [this.root]
    let result = []
    let current = null

    if (!this.root) return []

    while (stack.length) {

      current = stack.pop()

      result.push(current.data)

      if (current.right !== null) {
        stack.push(current.right)
      }
      if (current.left !== null) {
        stack.push(current.left)
      }


    }

    return result

  }


  //recursive post order
  dfsRecursivePreOrder(current = this.root, result = []) {
    if (current === null) return result

    result.push(current.data)

    if (current.left) {
      this.dfsRecursivePreOrder(current.left, result)
    }
    if (current.right) {
      this.dfsRecursivePreOrder(current.right, result)
    }

    return result

  }


  dfsPostOrder(current=this.root, result=[]) { 
    
    if(current === null)return result

    this.dfsPostOrder(current.left,result)
    this.dfsPostOrder(current.right,result)
    // console.log("----",current.data)
    result.push(current.data)

    return  result
  }


  dfsInorder(current = this.root , result = []){

    if(current === null) return result ;

    this.dfsInorder(current.left,result )
    result.push(current.data)
    this.dfsInorder (current.right,result)
    return result
  }


}



const tree = new BST();
console.log(tree)

tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)
console.log(tree.includes(7))
console.log(tree.includes(0))

console.log(tree.bfs())
console.log(tree.dfs())
console.log(tree.dfsRecursivePreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInorder())

console.log(tree)
