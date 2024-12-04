//commonJs
// const {getFullName} = require('./modules/names');
// const getHobbies =require("./modules/hobbies")

//S6
 import names from './modules/names.js';
 import getHobbies from "./modules/hobbies.js";



//commonJS
// console.log("ciao");

// const functions = () => {
//     return{
//         fullName: getFullName("jenson", "aquino"),
//         hobbies: getHobbies("hobbyOne", "hobbyTwo", "hobbyThree"),
//     }
// }

// console.log(functions());


//S6
const functions = () => {
     return{
         fullName: names.getFullName("jenson", "aquino"),
         hobbies: getHobbies("hobbyOne", "hobbyTwo", "hobbyThree"),
     }
 }

 console.log(functions());