// Enums
const KIDS =15;
const EASY =9;
const MEDIUM =6;
const HARD =3;
enum kids{
    five=25,
    seven=15,
    ten=10
}

enum Level{
    Kid=kids.five,
    Easy=9,
    Medium=6,
    Hard=3
}
let lv1:string="Easy";
if(lv1=="Easy"){
    console.log(`the level is ${lv1} and the time is ${Level.Easy} `);
} 
console.log(Level.Kid);
