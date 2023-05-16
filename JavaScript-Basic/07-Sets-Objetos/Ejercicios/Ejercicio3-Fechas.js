const date = new Date();
console.log(date);
const dateNacimiento = new Date(2003, 3,15, 24,40);

const mastarde = date.getTime() > dateNacimiento.getTime();
console.log(mastarde);

const dayNacimiento = dateNacimiento.getDay();
const monthNacimiento = dateNacimiento.getMonth();
console.log(dayNacimiento);
const yearNacimiento = dateNacimiento.getFullYear();
console.log(yearNacimiento);