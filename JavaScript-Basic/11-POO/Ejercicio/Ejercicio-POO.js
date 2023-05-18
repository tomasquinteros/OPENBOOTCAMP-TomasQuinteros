class Estudiantes {
  #name;
  #asignaturas = ["HTML", "CSS", "JavaScript"];
  constructor (name) {
    this.#name = name;
    this.#asignaturas;
  }
  getData() {
    return {
      name: this.#name,
      asignaturas: this.#asignaturas
    }
  }
}

const persona = new Estudiantes("Tomas");
const data_persona = persona.getData();
console.log(data_persona);