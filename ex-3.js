//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
// if (lightBulbStatus === "on") {
//     console.log("Light bulb is On.");
// } else if (lightBulbStatus === "off") {
//     console.log("Light bulb is Off.")
// };

lightBulbStatus === "On"
? console.log("Light bulb is On.")
: lightBulbStatus === "Off"
? console.log("Light bulb is Off.")
: console.log("Please choose the correct input (On/Off)");