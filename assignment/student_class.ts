class Student {
    readonly studentId: number;

    constructor(studentId: number, public name: string) {
        this.studentId = studentId;
    }

    display() {
        console.log(this.studentId, this.name);
    }
}

let s = new Student(101,"David");

s.display();