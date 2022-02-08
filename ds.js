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
    if(key<root.data){
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
