/**
 * Created by Lucifer on 28-Oct-16.
 */
function Tickets(arr,criteria) {
    let array = [];
        class Ticked{
            constructor(destination,price,status){
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
    for (let ticked of arr){
        let [destination,price,status] = ticked.split("|");
        var  maikaTi = new Ticked(destination,Number(price),status);
        array.push(maikaTi);
    }
    array.sort(function(a,b){
        if (a[criteria] < b[criteria])
            return -1;
        if (a[criteria] > b[criteria])
            return 1;
        return 0;
    });
    return array;
}