let result = []
function merge(data , start , middle , end , result ){
   
  
    let index = start
    let i = start
    let j = middle + 1 
    while(i<=start && j <=end){
        result[index++] = data[i] < data[j] ? data[i++] : data[j++]
    }
  
    while(i<=middle) {
        result[index++] = data[i++]
    }
    while(j<=end){
        result[index++] = data[j++]
    }
  
  }




  function merge_sort(arr , start , end , result){

    if(1 == end - start) {
        
        if(arr[start] > arr[end]) {
            swap(arr , start , end)
        }
        return 
    } 
    else if(0 == end - start) {
       return 
    }
    else {
        let middle = Math.floor(start + ((end -start ) >> 1))
        merge_sort(arr , start , middle , result)
        merge_sort(arr , middle+1 , end , result)
        merge(arr , start , middle , end , result)

        for(let k = start;k<=end;k++){
			arr[ k ] = result[k];
		}
    }

  }





  function swap(data , i , j ){

    let temp  = data[i] 
    data[i] = data[j]
    data[j] = temp


  }


  let arr = [9,6,7,22,20,33,16,20]
  merge_sort(arr , 0 , arr.length-1 , result)


  console.log(result)