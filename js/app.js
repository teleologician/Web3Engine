const { Node, TransformNode, GeometryNode } = require('./sceneGraph.js');  // Adjust the path as necessary based on actual file location

// Your scene setup code
const root = new TransformNode('Root');
const spaceshipTransform = new TransformNode('SpaceshipTransform', { x: 100, y: 200, z: 0 });
root.add(spaceshipTransform);
const spaceshipGeometry = new GeometryNode('SpaceshipGeometry', 'spaceshipMesh.glb');
spaceshipTransform.add(spaceshipGeometry);

function printNode(node) {
    console.log(node.name);
}

root.traverse(printNode);