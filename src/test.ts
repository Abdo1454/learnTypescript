// Enums
const KIDS =15;
const EASY =9;
const MEDIUM =6;
const HARD =3;
enum Level{
    Kids=15,
    Easy=9,
    Medium=6,
    Hard=3
}
let lv1:string="Easy";
if(lv1=="Easy"){
    console.log(`the level is ${lv1} and the time is ${Level.Easy} `);
} 