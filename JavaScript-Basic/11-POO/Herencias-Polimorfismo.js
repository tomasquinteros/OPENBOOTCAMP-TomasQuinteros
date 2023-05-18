// Herencia! --> Nos sirve para no repetir codigo y poder usar una clase dentro de otra.

class Persona { 
  #name
  #age
  _isDeveloper = true
  constructor(name, age, isDeveloper) {
    this.#name = name
    this.#age = age
    this._isDeveloper = isDeveloper
  }
  getData() {
    return console.log(`Mi nombre es ${this.#name}, tengo ${this.#age}`)
  }
}

class Desarrollador extends Persona {
  constructor(name, age, lenguaje) {
    super(name, age)
    this.lenguaje = lenguaje
  }
  getData() {
    super.getData();
    return console.log(`Mi lenguaje es ${this.lenguaje}`);
  }
}

const dev =new Desarrollador("Tomas", 20, "JavaScript");
const data_dev = dev.getData();
console.log(data_dev);

// Polimorfimos --> Las clases en js pueden tomar varias formas

