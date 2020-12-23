



class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null 
    }
}





class Tree {
   
    constructor(){
        this.root = null 
    }



    // 插入节点 
    insert(value){
        let newNode = new Node(value)
        if(this.root == null ) {
            this.root = newNode
        } else {
            this.insertNode(this.root , newNode)
        }
    }
    insertNode(node , newNode) {
        if(node.value > newNode.value) {
              if(node.left == null) {
                node.left = newNode
              } else {
                  this.insertNode(node.left , newNode)
              }
        } else if(node.value < newNode.value) {
             if(node.right == null )  {
                 node.right = newNode
             } else {
                this.insertNode(node.right , newNode)
             }
        }
    }
    // 删除节点
    delete(value){
    this.root = this.deleteNode(this.root , value)
    }
    // 找右侧最小的节点
    findRightMinNode(node){
     while(node && node.left !== null) {
         node = node.left 
     }
     return node
    }
    deleteNode(node , value){
        
        if(node == null) return null
        if(node.value < value) {
            node.right = this.deleteNode(node.right  , value )
            return node
        } else if(node.value > value) {
            node.left = this.deleteNode(node.left  , value )
            return node
        } else {
            if(node.left == null && node.right == null)  {
                     node = null 
                     return node
            }
            if(node.left == null) {
                node = node.right 
                return node
            }
            if(node.right == null) {
                node = node.left 
                return node
            }

            // 这种情况是 左右有子节点 
            let minRightNode = this.findRightMinNode(node.right)
            node.value = minRightNode.value
            node.right = this.deleteNode(node.right , minRightNode)
            return node
        }
    }
    // 遍历节点
    traverseNode(node , callback) {
      if(node == null) return 
      this.traverseNode(node.left , callback)
      this.traverseNode(node.right , callback)
      callback(node.value)
    }
    traverse(callback){
     this.traverseNode(this.root , callback)
    }
    minNode(node){
       if(node == null) {
           return null
       } 

       while(node && node.left) {
           node = node.left
       }
       console.log(node.value)
    }
    maxNode(node){
        if(node == null) {
            return null
        } 
 
        while(node && node.right) {
            node = node.right
        }
 
 
        console.log(node.value)
     }
    min(){
     this.minNode(this.root)
    }

   max(){
       this.maxNode(this.root)
   }
}



const tree = new Tree()
tree.insert(8)
tree.insert(5)
tree.insert(2)
tree.insert(6)
tree.insert(9)

const printf = function(value){
    console.log('value---',value)
}




// 替换右侧子树的最小节点

tree.delete(5)
console.log(tree)