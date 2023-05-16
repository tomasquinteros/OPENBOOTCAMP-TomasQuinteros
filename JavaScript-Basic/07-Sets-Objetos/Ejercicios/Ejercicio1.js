const array = ["Tomas", "Victor", "Nadia", "Zoe", "Mirko", "Ignacio", "Adriana", "Dafne"];
const family = new Set(array);
console.log(family);

family.add("Tomas");
console.log(family);
family.add("JavaScript");
console.log(family);