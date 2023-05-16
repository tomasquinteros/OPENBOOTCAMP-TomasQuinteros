const personalData = {
 name: "Tomas",
 lastname: "Quinteros",
 age: 20,
 height: 170,
 isDeveloper: true
}

const { age } = personalData;
console.log(age);

const bestFriends = [
 {
  name: "Juan",
  age: 21
 },
 {
  name: "Julian",
  age: 20
 }
]
const arrayPD = [personalData, ...bestFriends];
console.log(arrayPD)

const arrayOrdered = arrayPD.sort((a, b) => b.age - a.age);
console.log(arrayOrdered);