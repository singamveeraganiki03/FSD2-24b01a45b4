"use strict";
class Student {
    name;
    studentId;
    constructor(studentId, name) {
        this.name = name;
        this.studentId = studentId;
    }
    display() {
        console.log(this.studentId, this.name);
    }
}
let s = new Student(101, "David");
s.display();
