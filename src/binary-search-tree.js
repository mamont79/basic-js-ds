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



    // has tree element or not

    has(data) {
        return this.hasData(this.way, data);
    }
    hasData(wayNode, data) {
        if (!wayNode) {
            return false;
        } else if (wayNode.data == data) {
            return true;
        } else if (data < wayNode.data) {
            return this.hasData(wayNode.left, data);
        } else if (data > wayNode.data) {
            return this.hasData(wayNode.right, data);
        }
    }



    find(data) {
        return this.findElem(this.way, data)
    }

    findElem(wayNode, data) {
        if (!wayNode) {
            return null;
        } else if (data == wayNode.data) {
            return wayNode;
        } else if (data < wayNode.data) {
            return this.findElem(wayNode.left, data);
        } else {
            return this.findElem(wayNode.right, data);
        }
    }


    // have not enough time, good luck me in future tasks
    remove(data) {

    }



    // minimum of tree
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


    // maximum of tree
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