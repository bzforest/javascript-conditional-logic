//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

// if (lightBulbStatus === "On") {
//     console.log("Light bulb is On.");
// } else if (lightBulbStatus === "off") {
//     console.log("Light bulb is Off.")
// } else if (lightBulbStatus === "Broken") {
//     console.log("Light bulb is Broken.")
// } else {
//     console.log("Please choose the correct inout (On/Off/Broken)")

switch (lightBulbStatus) {
    case "On":
        console.log("Light bulb is On.");
        break;
    case "Off":
        console.log("Light bulb is Off.");
        break;
    case "Broken":
        console.log("Light bulb is Broken.")
        break;
}