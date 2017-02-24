/**
 * Created by Lucifer on 02-Nov-16.
 */
function personAndTeacher() {
    class Person{
        constructor(input1,input2){
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person{
        constructor (name,email,subject){
        super(name,email);
            this.subject = subject;
    }
    }
    return {
        Person,
        Teacher
    }
}