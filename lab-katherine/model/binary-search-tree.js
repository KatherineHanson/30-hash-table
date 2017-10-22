'use strict'

const Node = require('./node.js')

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      let parent
      while(true) {
        parent = current
        if (value < current.value) {
          current = current.left
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = node
            break
          }
        }
      }
    }
  }

  find(predicate){
    if (typeof predicate !== 'function') {
      throw new TypeError('__LINKED_LIST_ERROR__ predicate should be a function')
    }
    if (predicate(this) === true) {
      return this
    } else {
      let current = this.root
      console.log(current.value)
      while (current.value !== data) {

      }
    }
  }
}
