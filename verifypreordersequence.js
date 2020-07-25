//Objective is to verify whether a preorder array is the correct order 
//of a BST

let preorder = [5,2,1,3,6]


//O(n) solution that first checks the left subtree, then checks the right subtree

let low = -Infinity
let stack = []

for (let num of preorder) {
    //Some nodes in right subtree must be greater than root
    if (num < low) {
        return false
    }
    
    //In right subtree, so pop out everything from left subtree
    //Make the new low the root of that subtree
    while (stack.length > 0 && stack[stack.length - 1] < num) {
        low = stack.pop()
    }
    stack.push(num)
}

return true