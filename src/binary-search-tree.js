const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {

    constructor() {
        this.way = null;
    }

    root() {
        return this.way;
    }


    // adding new element, additional recursion
    add(data) {
        let newNode = new Node(data);

        if (this.way == null) {
            this.way = newNode;
        } else {
            this.addNewNode(this.way, newNode);
        }
    }
    addNewNode(newPoint, newNode) {
        if (newNode.data > newPoint.data) {
            if (newPoint.right == null) {
                newPoint.right = newNode;
            } else {
                this.addNewNode(newPoint.right, newNode);
            }
        } else {
            if (newPoint.left == null) {
                newPoint.left = newNode;
            } else {
                this.addNewNode(newPoint.left, newNode);
            }
        }
        return newPoint;
    }

    has(data) {

    }

    find(data) {

    }

    remove(data) {

    }

    min() {
        if (!this.way) {
            return null;
        } else {
            let thisPoint = this.way;
            while (thisPoint.left) {
                thisPoint = thisPoint.left;
            }
            return thisPoint.data;
        }
    }

    max() {
        if (!this.way) {
            return null;
        } else {
            let thisPoint = this.way;
            while (thisPoint.right) {
                thisPoint = thisPoint.right;
            }
            return thisPoint.data;
        }
    }
}

module.exports = {
    BinarySearchTree
};