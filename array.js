//------------------------  Array -----------------------
const array = [12, 13, 14, 15, 16, 17, 18, 19, 20];
/*
console.log(array.length);
console.log(array);
console.log(array[8]);  //8 number index er element
//set or update element value by index
array[1] = 999;
console.log(array);     */

//------------------------  Push-Pop
/*
array.push("push");
array.push(200);
array.push(300, 400);
console.log(array);
array.pop();
console.log(array);
const pop1 = array.pop();
console.log(array);
console.log(pop1);      */

//------------------------  Shift-Unshift
/*
array.shift();
console.log(array);
array.unshift("unshift");
console.log(array); */

//------------------------  includes()    *****Case sensitive
const friends = ["balam", "kalam", "salam", "gelam", "pailam"];
/*
console.log(array.includes(14));
console.log(array.includes(100));
if(friends.includes("khailam")) {
    console.log("party");
}
else {
    console.log("no party");
}
console.log(friends.includes("salam"));
console.log(friends.includes("Salam"));     //case sensitive
*/

//------------------------  indexOf()
/*
console.log(friends.indexOf("gelam"));
console.log(friends.indexOf("khailam"));       */

//------------------------  Array.isArray()
const num = []
const food = "ros o gol la";
const age = 20;
console.log(Array.isArray(friends));
console.log(Array.isArray(num));
console.log(Array.isArray(food));
console.log(Array.isArray(age));