class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null

    }
}
var root=null
function insert(key) {
    root = insertion(key,root);
}





function insertion(key,root){
    if(root==null){
        root=new Node(key)
        return root
    }
    if(key<=root.data){
        root.left=insertion(key,root.left)
    }
    else if(key>root.data){
        root.right=insertion(key,root.right)
    }

    return root
}
function preorder(root){
   
    if(root != null){
        console.log(root.data)
        preorder(root.left)
        
        preorder(root.right)

    }
}
function preorderiterative(node){
    if (node == null)
    {
        return;
    }
    var nodeStack = [];
    nodeStack.push(root);
     
    /* Pop all items one by one. Do following
    for every popped item
    a) print it
    b) push its right child
    c) push its left child
    Note that right child is pushed first so
    that left is processed first */
    while (nodeStack.length > 0)
    {
         
        // Pop the top item from stack and print it
        var mynode = nodeStack[nodeStack.length - 1];
       console.log(mynode.data)
        nodeStack.pop();
         
        // Push right and left children of
        // the popped node to stack
        if (mynode.right != null)
        {
            nodeStack.push(mynode.right);
        }
        if (mynode.left != null)
        {
            nodeStack.push(mynode.left);
        }
    }
}

function search(root, key)
{
    if (root == null ||root.data == key){
        return root;}
    if (key<=root.data){
       return search(root.left, key);}
     else{
    return search(root.right, key);}
}


insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
console.log(search(root,60),"hie")
preorder(root)
console.log(root.data,root.left.data,root.right.data)
preorderiterative(root)
