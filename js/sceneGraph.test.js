const { Node, TransformNode, GeometryNode } = require('./sceneGraph.js'); // Adjust path as necessary

describe('Scene Graph', () => {
    test('should add and remove a child node', () => {
        const parent = new Node('Parent');
        const child = new Node('Child');
        parent.add(child);
        expect(parent.children.includes(child)).toBe(true);
        expect(child.parent).toBe(parent);

        parent.remove(child);
        expect(parent.children.includes(child)).toBe(false);
        expect(child.parent).toBe(null);
    });

    test('should set and get transformations', () => {
        const node = new TransformNode('TransformNode');
        const transformation = { x: 10, y: 20, z: 30 };
        node.setTransform(transformation);
        expect(node.transform).toEqual(transformation);
    });

    test('should hold and retrieve mesh data', () => {
        const mesh = 'exampleMesh.glb';
        const geometryNode = new GeometryNode('GeometryNode', mesh);
        expect(geometryNode.mesh).toBe(mesh);
    });

    test('should traverse and execute a function on each node', () => {
        const root = new TransformNode('Root');
        const child1 = new TransformNode('Child1');
        const child2 = new TransformNode('Child2');
        root.add(child1);
        root.add(child2);
        const mockFunction = jest.fn();
        root.traverse(mockFunction);
        
        expect(mockFunction.mock.calls.length).toBe(3); // Once for root, child1, and child2
    });
});
