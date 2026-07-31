class Student {
    static college = "ABC Engineering College";

    constructor(public name: string) {}

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