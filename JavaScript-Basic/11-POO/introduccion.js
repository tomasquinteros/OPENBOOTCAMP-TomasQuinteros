class Persona { // Forma de crear un objeto reutilizable
  constructor(name, age, isDeveloper) { // En el constructor se pasan los atributos que tendra nuestra clase
    this.name = name
    this.age = age
    this.isDeveloper = isDeveloper
  }
  saludo() {
    console.log(`Hola! Mi nombre es ${this.name}`)
  }
}

const person = new Persona("Tomas", 20, true); // Instanciamos
console.log(person instanceof Persona) // Aca nos dice que nuestro person se encuentra instanciado en la clase Persona
console.log(person);