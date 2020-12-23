let arr = [4,6,3,7,1]



function sum(number) {
    if(number ==1) {
        return 1
    }
    return number + sum(number -1 )
}
function process(arr , left , right) {
    if(left == right) {
        return arr[left]
    }
let middle = Math.floor(left + ((right -left ) >> 1))
let leftMin = process(arr , left , middle)
let rightMin = process(arr , middle+1 , right)
return Math.min(leftMin , rightMin)
}

let start = 0 
let end = arr.length -1 

console.log(process(arr ,start , end))





