function breadthFirstArray(root) {
    if (!root) return null;
    const visited = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        
        visited.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}

module.exports = {
    breadthFirstArray
};