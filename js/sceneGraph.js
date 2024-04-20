class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.parent = null;
    }

    add(child) {
        child.parent = this;
        this.children.push(child);
    }

    remove(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            child.parent = null;
            this.children.splice(index, 1);
        }
    }

    traverse(callback) {
        callback(this);
        this.children.forEach(child => child.traverse(callback));
    }
}

class TransformNode extends Node {
    constructor(name, transform = { x: 0, y: 0, z: 0 }) {
        super(name);
        this.transform = transform;
    }

    setTransform(transform) {
        this.transform = transform;
    }
}

class GeometryNode extends Node {
    constructor(name, mesh) {
        super(name);
        this.mesh = mesh;
    }
}

module.exports = { Node, TransformNode, GeometryNode };
