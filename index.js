class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this._insert(val, this.root);
  }

  _insert(val, node) {
    if (!node) return new AVLNode(val);

    if (val < node.value) {
      node.left = this._insert(val, node.left);
    } else if (val > node.value) {
      node.right = this._insert(val, node.right);
    } else {
      return node;
    }

    this.updateHeight(node);
    const balance = this.balanceFactory(node);

    //  th1 : left-left
    if (balance > 1 && val < node.left.value) {
      return this.rotateLeft(node);
    }

    //  th2 : right-right
    if (balance < -1 && val > node.right.value) {
    }

    //th3 : left-right
    if (balance > 1 && val > node.left.value) {
    }

    //th4 : right-left
    if (balance < -1 && val < node.right.value) {
    }

    return node;
  }

  height(node) {
    return node ? node.height : 0;
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  balanceFactory(node) {
    return this.height(node.left) - this.height(node.right);
  }

  rotateLeft(x) {
    let y = x.left;
    x.left = y.right;
    y.right = x;
    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  //      30                30

  //    20                       31

  //  10                              32
}

const avlTree = new AVLTree();
avlTree.insert(30);
avlTree.insert(20);
avlTree.insert(10);
console.log(avlTree);
