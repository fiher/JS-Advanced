/**
 * Created by Lucifer on 04-Nov-16.
 */
class SortedList{
    constructor(){
        this.arr = [];
        this.size =0;
    }
    add(element){
        this.arr.push(element);
        this.size+=1;
        this.sort();
    }
    remove(index){
        if(index>-1&&index<this.arr.length){
            this.arr.splice(index,1);
            this.size = this.size-1;
            this.sort();
        }
    }
    get(index){
        if(index>-1&&index<this.arr.length){
            return this.arr[index];
        }else{
            throw new Error;
        }

    }
    sort(){
        return this.arr.sort((a,b)=>a-b);
    }

}
