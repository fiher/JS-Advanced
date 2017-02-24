/**
 * Created by Lucifer on 08-Nov-16.
 */
function subsum(arr,startIndex,endIndex){
    if(!Array.isArray(arr)){
        console.log("neshto");
        return NaN;
    }
    if(startIndex<0){
        startIndex=0;
    }
    if(endIndex>arr.length-1){
        endIndex = arr.length-1;
    }
    let sum = 0;
    for(let i= startIndex ; i <=endIndex;i++ ){
        sum += Number(arr[i]);
    }
    return sum;
}
console.log(subsum([],0,0));
