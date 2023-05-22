const name = "Tomas";
const lastName = "Quinteros";

const objData = {name, lastName};

sessionStorage.setItem("object", JSON.stringify(objData));
localStorage.setItem("object", JSON.stringify(objData));

document.cookie = `object=${JSON.stringify(objData)};expires=` + new Date(2023, 04, 22, 16, 24).toUTCString();