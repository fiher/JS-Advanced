/**
 * Created by Lucifer on 20-Oct-16.
 */
function reduce(arr,func) {
    let result = arr[0];
    for(nextElem of arr.slice(1)){
        result = func(result, nextElem);

    }
    return result;

}
console.log(reduce([3,4,5,10], (x,y)=> x+y));