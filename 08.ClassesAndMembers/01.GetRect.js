/**
 * Created by Lucifer on 27-Oct-16.
 */
class Rectangle {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea(){
        return this.width*this.height;
    }
}