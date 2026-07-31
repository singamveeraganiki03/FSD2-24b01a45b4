class Student {
    constructor(
        public id: number,
        public name: string,
        public course: string
    ) {}

    display(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Course: ${this.course}`);
    }
}

let student = new Student(101, "John", "TypeScript");

student.display();