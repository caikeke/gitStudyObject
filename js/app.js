import streamV1, {firstName, lastName, year, foo} from "./profile.js";
import mathsTools from "./tools.js";

let rootDiv = document.getElementById("root");
rootDiv.innerText = firstName + "-" + lastName +"-"+ year;
console.log(foo);
setTimeout(function () {
    console.log(foo);
}, 1000);
streamV1();
console.log(mathsTools.add(3, 4));