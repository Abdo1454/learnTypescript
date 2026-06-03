"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Level;
(function (Level) {
    Level[Level["Kids"] = 15] = "Kids";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lv1 = "Easy";
if (lv1 == "Easy") {
    console.log(`the level is ${lv1} and the time is ${Level.Easy} `);
}
//# sourceMappingURL=test.js.map