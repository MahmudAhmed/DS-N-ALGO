function treeHeight(root) {
    if (!root) return -1;
    // if (!root.left && !root.right) return 0;

    // const leftCount = root.left ? treeHeight(root.left) : 0
    // const rightCount = root.right ? treeHeight(root.right) : 0

    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


module.exports = {
    treeHeight
};