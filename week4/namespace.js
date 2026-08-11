"use strict";
// employeeData.ts
var EmployeeInfo;
(function (EmployeeInfo) {
    // Private constant
    const employeeIdLength = 8;
    // Validate Employee ID
    function checkEmployeeId(empId) {
        const isNumeric = /^\d+$/.test(empId);
        return isNumeric && empId.length === employeeIdLength;
    }
    EmployeeInfo.checkEmployeeId = checkEmployeeId;
    // Validate Employee Code
    function checkEmployeeCode(empCode) {
        const codePattern = /^[A-Z]{4}[0-9]{2}$/;
        return codePattern.test(empCode.toUpperCase());
    }
    EmployeeInfo.checkEmployeeCode = checkEmployeeCode;
    // Nested Namespace
    let Salary;
    (function (Salary) {
        function calculateBonus(salary) {
            return salary * 0.15; // 15% Bonus
        }
        Salary.calculateBonus = calculateBonus;
    })(Salary = EmployeeInfo.Salary || (EmployeeInfo.Salary = {}));
})(EmployeeInfo || (EmployeeInfo = {}));
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
