"use strict";
// let name :string="abdo";
// let num :number = 10;
// let hire :boolean= true; 
// let all :any ="Abdulrahim";
// all =100;
Object.defineProperty(exports, "__esModule", { value: true });
// function ADD(n1:number,n2:number){
//     return n1+n2;
// }
// console.log(ADD(10,20));
// console.log(typeof(ADD(10,20)));
let showMsg = true;
function showDaitils(name, age, salary) {
    if (showMsg) {
        return `Hello ${name} , Age is ${age} , Salary is ${salary}`;
    }
}
console.log("abdo", 21, 15);
function addAll(...nums) {
    let res = 0;
    nums.forEach((num) => {
        res += num;
    });
    return res;
}
console.log(addAll(1, 2, 3, 4, 5, +true));
// --- Anonymous Function
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(1, 4));
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(2, 4));
//# sourceMappingURL=main.js.map