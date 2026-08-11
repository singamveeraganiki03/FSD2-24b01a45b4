"use strict";
class Student {
    name;
    static college = "ABC Engineering College";
    constructor(name) {
        this.name = name;
    }
    static displayCollege() {
        console.log(Student.college);
    }
    display() {
        console.log(this.name);
    }
}
Student.displayCollege();
let student = new Student("John");
student.display();
