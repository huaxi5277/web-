let arr = [4,6,3,7,1]





function process(arr , left , right) {
  
    if(start == end) {
        return arr[start]
    }
let middle = right + ((right -left +1 ) >> 1)
let leftMin = process(arr , left , middle)
let rightMin = process(arr , middle+1 , right)
return Math.min(leftMin , rightMin)
}

let start = 0 
let end = arr.length -1 

console.log(process(arr ,start , end))