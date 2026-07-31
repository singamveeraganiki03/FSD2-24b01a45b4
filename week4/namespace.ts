// employeeData.ts

namespace EmployeeInfo {

    // Private constant
    const employeeIdLength = 8;

    // Validate Employee ID
    export function checkEmployeeId(empId: string): boolean {
        const isNumeric = /^\d+$/.test(empId);
        return isNumeric && empId.length === employeeIdLength;
    }

    // Validate Employee Code
    export function checkEmployeeCode(empCode: string): boolean {
        const codePattern = /^[A-Z]{4}[0-9]{2}$/;
        return codePattern.test(empCode.toUpperCase());
    }

    // Nested Namespace
    export namespace Salary {

        export function calculateBonus(salary: number): number {
            return salary * 0.15; // 15% Bonus
        }

    }
}

// -------- Main Program --------

const employeeId = "12345678";
const employeeCode = "ABCD12";

console.log(`Employee ID Valid: ${EmployeeInfo.checkEmployeeId(employeeId)}`);
console.log(`Employee Code Valid: ${EmployeeInfo.checkEmployeeCode(employeeCode)}`);

const monthlySalary = 50000;
const bonus = EmployeeInfo.Salary.calculateBonus(monthlySalary);

console.log(`Bonus Amount: ₹${bonus}`);

// Uncomment to see error
// console.log(EmployeeInfo.employeeIdLength);