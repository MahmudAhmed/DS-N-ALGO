function inOrderArray(root, results = []) {
    if (!root) return [];


    if (root.left) inOrderArray(root.left, results)
    results.push(root.val)
    if (root.right) inOrderArray(root.right, results)
    return results;
}

function postOrderArray(root, results = []) {
    if (!root) return [];
    
    if (root.left) postOrderArray(root.left, results)
    if (root.right) postOrderArray(root.right, results)
    results.push(root.val)
    return results;
}


module.exports = {
    inOrderArray,
    postOrderArray
};