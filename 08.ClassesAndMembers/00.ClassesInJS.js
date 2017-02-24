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
class Person{
    constructor(firstName,lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName}${this.lastName}(age: ${this.age}, email: ${this.email})`;
    }
}