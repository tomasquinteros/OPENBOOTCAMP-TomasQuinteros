class Persona { 
  #name
  #age
  _isDeveloper = true

  constructor(name, age, isDeveloper) {
    this.#name = name
    this.#age = age
    this._isDeveloper = isDeveloper
  }
  getName() { // --> Esto seria una funcion getter
    return this.#name
  }
  getAge() {
    return this.#age;
  }
  setAge(age) { // --> Esto seria una funcion setter
    this.#age = age
  }
} 

const persona =new Persona("Tomas", 20);
console.log(persona.name) // --> es un atributo privado
// Getter --> metodos que nos permiten obtener atributos/metodos privados y protegidos
const name = persona.getName();
console.log(name);

// Setter --> metodos que nos permiten cambiar el valor de los atributos/metodos privados y protegidos.
persona.setAge(23);
console.log(persona.getAge()) 
