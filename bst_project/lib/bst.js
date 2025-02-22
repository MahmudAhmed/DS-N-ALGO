class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
   }

   insert(val, root = this.root){
       if (!this.root) {
           this.root = new TreeNode(val);
           return;
       }

       if (val < root.val){
           if (!root.left){
             root.left = new TreeNode(val);
           } else {
            this.insert(val, root.left);
           }
       } else {
           if (!root.right){
               root.right = new TreeNode(val);
           } else {
            this.insert(val, root.right);
           }
       }
       
   }

   searchRecur(val, root = this.root){
       if (!root) return false;
       if (root.val > val){
        // debugger
           return this.searchRecur(val, root.left);
       } else if (root.val < val){
           return this.searchRecur(val, root.right)
       } else {
           return true;
       }
   }

    searchIter(val) {
        if (!this.root) return false;
        const stack = [this.root]
        while (stack.length){
            const node = stack.pop();
            if (node.val === val) return true;

            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};