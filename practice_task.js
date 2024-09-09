//----------------  Problem1
const fruit_array = ["apple", "orange", "mango", "watermelon", "peach"];
console.log(fruit_array);
console.log(fruit_array[3]);
fruit_array[2] = "jambura";
console.log(fruit_array);

//----------------  Problem2
const tour = ["Malaysia", "New Zealand", "Paris"];
console.log(tour);
tour.push("Iceland");
console.log(tour);
tour.push( "Japan", "France");
console.log(tour);
tour.pop();
console.log(tour);

//----------------  Problem3
const books = ["English", "Horror", "Triller", "Adventure"];
console.log(books.includes("Triller"));
if(books.includes("Horror")) {
    console.log("Let's Watch Horror Movie Then")
}
else {
    console.log("Let's go for adventure then");
}

//----------------  Problem4
const num = 10;
const food = 'no  thi  ng';
const empty = [];
console.log(Array.isArray(books));
console.log(Array.isArray(food));
console.log(Array.isArray(num));
console.log(Array.isArray(empty));

//----------------  Problem5
console.log(books.concat(fruit_array, food));