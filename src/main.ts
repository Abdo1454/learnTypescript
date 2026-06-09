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

// let showMsg=true;
// function showDaitils(name:string,age:number,salary:number){
//     if(showMsg){
//         return `Hello ${name} , Age is ${age} , Salary is ${salary}`;
//     }
// }

// console.log("abdo",21,15);

// function addAll(...nums:number[]){
//     let res=0;
//     nums.forEach((num)=>{
//         res+=num;
//     })
//     return res;
// }
// console.log(addAll(1,2,3,4,5,+true));
// // --- Anonymous Function
// const add =function(num1:number, num2:number):number{
//     return num1+num2;
// }
// console.log(add(1,4));
// const addArrow=(num1:number,num2:number):number=> num1+num2;

// console.log(addArrow(2,4));

// // data types 
// // adavnced types Alis

// type Bottuns={
//     up:string,
//     down:string,
//     right:string,
//     left:string
// }
// function getAction(btns:Bottuns){
//     console.log(`Action For Button UP Is ${btns.up}  `);
//     console.log(`Action For Button DOWN Is ${btns.down}  `);
//     console.log(`Action For Button RIGHt Is ${btns.right}  `);
//     console.log(`Action For Button LEFT Is ${btns.left}  `);
// }
// getAction({up:"go up",down: "go down",right:"go right",left:"go left"});

// // data types 
// // Tuple
// let article:readonly [number,string,boolean] =[11,"TiTle ONE",true];
// // article.push(10000);
// console.log(article);
// // return type never return
// function sendMsg(msg:string){
//     console.log(msg);
//     return msg;
// }   
// console.log(sendMsg("Hello World"));
// function logName(name:string){
//     while(true){
//         console.log(name);
//     }
//     return name;
// }
// logName("Abdulrahim");

// data types
//    type assertions
// let myImage = document.getElementById("myImage") as HTMLImageElement;
// console.log(myImage.src);

// let data :any="1000 ";
// console.log((data as string).repeat(3));
// intersection types
type A={
    one:string,
    two:number,
    three:boolean
}
type B=A&   {
    four:string,
    five:number
}
function getData(data:B){
    console.log(`the value of one is ${data.one}  `);
    console.log(`the value of two is ${data.two}  `);
    console.log(`the value of three is ${data.three}  `);
    console.log(`the value of four is ${data.four}  `);
    console.log(`the value of five is ${data.five}  `);
}
console.log(getData({one:"Abdulrahim",two:21,three:true,four:"Hello",five:1000}));