class Employee {
    public name: string;
    protected department: string;
    private salary: number;

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    showDetails() {
        console.log(this.name);
        console.log(this.department);
        console.log(this.salary);
    }
}

class Manager extends Employee {
    display() {
        console.log(this.name);
        console.log(this.department);
    }
}

let emp = new Employee("Alice","IT",50000);

emp.showDetails();