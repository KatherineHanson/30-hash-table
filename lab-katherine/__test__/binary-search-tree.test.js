'use strict';

const BST = require('../model/binary-search-tree.js');

describe('binary search tree', () => {
  test('It should have a value and left and right should be null', () => {
    let bst = new BST({key: 'puppies', value: 4});
    // console.log('bst: ', bst);
    expect(bst.value).toEqual({key: 'puppies', value: 4});
    expect(bst.right).toEqual(null);
    expect(bst.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 'puppies', value: 4});
    bst.insert({key: 'kittens', value: 2});
    // console.log(bst);
    expect(bst.value).toEqual({key: 'puppies', value: 4});
    expect(bst.left.value).toEqual({key: 'kittens', value: 2});
    expect(bst.left.right).toEqual(null);
    expect(bst.left.left).toEqual(null);
  });

  test('It should have a value and left and right should be populated', () => {
    let bst = new BST({key: 'puppies', value: 4});
    bst.insert({key: 'kittens', value: 2});
    bst.insert({key: 'guinea pigs', value: 6});
    bst.insert({key: 'canaries', value: 1});
    bst.insert({key: 'hamsters', value: 3});
    bst.insert({key: 'parakeets', value: 5});
    bst.insert({key: 'horses', value: 7});
    console.log(bst);
    console.log(bst.left.value);
    console.log(bst.right.value);
  //   expect(bst.value).toEqual({key: 'puppies', value: 4})
  //   expect(bst.left.value).toEqual({key: 'kittens', value: 2})
    // expect(bst.right.value).toEqual({key: 'guinea pigs', value: 6})
    // expect(bst.left.left.value).toEqual({key: 'canaries', value: 1})
    // expect(bst.left.right.value).toEqual({key: 'hamsters', value: 3})
    // expect(bst.right.left.value).toEqual({key: 'parakeets', value: 5})
    // expect(bst.right.right.value).toEqual({key: 'canaries', value: 7})
  })

  // test('It should have the value searched', () => {
  //   let bst = new BST()
  //   bst.insert(4)
  //   bst.insert(2)
  //   bst.insert(6)
  //   bst.insert(1)
  //   bst.insert(3)
  //   bst.insert(5)
  //   bst.insert(7)
  //   let result1 = bst.find(node => node.value === 4)
  //   expect(result1).toBe(4)
  //   // let result2 = bst.find(node => node.value === 2)
  //   // expect(result2).toBe(2)
  // })

  // test('It should have the value searched removed', () => {
  //   let bst = new BST()
  //   bst.insert(4)
  //   bst.insert(2)
  //   bst.insert(6)
  //   bst.insert(1)
  //   bst.insert(3)
  //   bst.insert(5)
  //   bst.insert(7)
  //   let result = bst.remove(3)
  //   console.log(result)
  //   // expect(result.value).toBe(3)
  // })
});
