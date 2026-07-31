export function add(a:number,b:number){
    return a+b;
}

export function subtract(a:number,b:number){
    return a-b;
}

export function multiply(a:number,b:number){
    return a*b;
}

export function divide(a:number,b:number){
    return a/b;
}
import { add, subtract, multiply, divide } from "./math";

console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));