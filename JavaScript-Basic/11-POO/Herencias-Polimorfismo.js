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
  getName() {
    return this.#name
  }
  getAge() {
    return this.#age
  }
}

class Desarrollador extends Persona {
  constructor(name, age, lenguaje) {
    super(name, age)
    this.lenguaje = lenguaje
  }
  getData() {
    return `Mi nombre es ${this.getName()}, tengo ${this.getAge()} y uso de lenguaje a ${this.lenguaje}`
  }
}

const dev =new Desarrollador("Tomas", 20, "JavaScript");
const data_dev = dev.getData();
console.log(data_dev);

// Polimorfimos --> Las clases en js pueden tomar varias formas

