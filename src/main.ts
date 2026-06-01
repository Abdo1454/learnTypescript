// let name :string="abdo";
// let num :number = 10;
// let hire :boolean= true; 
// let all :any ="Abdulrahim";
// all =100;

// function ADD(n1:number,n2:number){
//     return n1+n2;
// }

// console.log(ADD(10,20));
// console.log(typeof(ADD(10,20)));

let showMsg=true;
function showDaitils(name:string,age:number,salary:number){
    if(showMsg){
        return `Hello ${name} , Age is ${age} , Salary is ${salary}`;
    }
}

console.log("abdo",21,15);

function addAll(...nums:number[]){
    let res=0;
    nums.forEach((num)=>{
        res+=num;
    })
    return res;
}
console.log(addAll(1,2,3,4,5,+true));
// --- Anonymous Function
const add =function(num1:number, num2:number):number{
    return num1+num2;
}
console.log(add(1,4));
const addArrow=(num1:number,num2:number):number=> num1+num2;

console.log(addArrow(2,4));

// data types 
// adavnced types Alis

type Bottuns={
    up:string,
    down:string,
    right:string,
    left:string
}
function getAction(btns:Bottuns){
    console.log(`Action For Button UP Is ${btns.up}  `);
    console.log(`Action For Button DOWN Is ${btns.down}  `);
    console.log(`Action For Button RIGHt Is ${btns.right}  `);
    console.log(`Action For Button LEFT Is ${btns.left}  `);
}
getAction({up:"go up",down: "go down",right:"go right",left:"go left"});

// data types 
// Tuple
let article:readonly [number,string,boolean] =[11,"TiTle ONE",true];
// article.push(10000);
console.log(article);