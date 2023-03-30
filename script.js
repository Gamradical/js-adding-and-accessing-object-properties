const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"];
cat.pet = function () {
  return "purrrrrrrr";
};

console.log(cat);
//{name: "Fred", nickname: "Flooficus", age: 5, isSleeping: true, favoriteToys: Array(3)…}
//name: "Fred"
//nickname: "Flooficus"
//age: 5
//isSleeping: true
//favoriteToys: Array(3)
//pet: ƒ () {}

console.log(cat.nickname);
//Flooficus

console.log(cat.favoriteToys[2]);
//bird stuffy

console.log(cat.name);
console.log(cat["name"]);
//Fred

const cat2 = {
  name: "Fred",
  nickname: "Flooficus",
  age: 5,
  isSleeping: true,
  favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
  pet: function () {
    return "purrrrrrrr";
  }
};

console.log(cat2);
//{name: "Fred", nickname: "Flooficus", age: 5, isSleeping: true, favoriteToys: Array(3)…}

cat.isSleeping = false;
cat["color"] = "orange";

console.log(cat);
//{name: "Fred", nickname: "Flooficus", age: 5, isSleeping: false, favoriteToys: Array(3)…}
//name: "Fred"
//nickname: "Flooficus"
//age: 5
//isSleeping: false
//favoriteToys: Array(3)
//pet: ƒ () {}
//color: "orange"

cat.play = function () {
  this.isSleeping = false;
  return `${this.nickname} is awake and playing!`;
};

console.log(cat.play());
//Flooficus is awake and playing!

let paperclips = 10;
paperclips = paperclips + 2;
console.log(paperclips);
//12

paperclips += 2;
console.log(paperclips);
//12 if prior operation not in play ;)
