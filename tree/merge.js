let arr1 = [1,3,1,5,3,5,3,6,2,8,9]
let arr2 = [3,1,5,3,3,1,4,2]

function merge(arr1 , arr2){
  let m = arr1.length 
  let n = arr2.length 

  let i = 0 
  let j = 0 
  let result = []
  let index = 0
  while(i<m && j <n){
      result[index++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]
  }

  while(i<m) {
      result[index++] = arr1[i++]
  }
  while(j<n){
      result[index++] = arr2[j++]
  }

  return result
}




console.log(merge(arr1 , arr2))