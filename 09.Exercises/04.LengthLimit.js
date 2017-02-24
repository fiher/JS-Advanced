/**
 * Created by Lucifer on 28-Oct-16.
 */
class Stringer{
    constructor(string,length){
        this.innerString = string;
        this.innerLength = length;
    }
    decrease(remove){
        this.innerLength -= remove;
        if(this.innerLength<3){
            this.innerLength=0;
        }
    }
    increase(add){
        this.innerLength += add;
    }
    toString(){
        let result = '';
    if(this.innerString.length <= this.innerLength) {
        return this.innerString;
    }else{
        for(let i =0;i<this.innerLength;i++){
            result +=this.innerString[i];
        }
        return result+"...";
    }
}
}