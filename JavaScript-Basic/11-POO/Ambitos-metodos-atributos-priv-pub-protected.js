class Persona {
  // Si queremos que nuestras propiedades no puedan ser modificadas por un agente externo debemos utilizar --> # (Privated)
  // # Privated --> Solo se puede acceder dentro de la clase.
  #name;
  #age;
  #getAge;
  ///////
  // Si la queremos protegida --> Protected:
  // _ Protected --> Solo se puede acceder dentro de la clase y de clases descendientes. 
  _isDeveloper = true;
  constructor(name, age) {
    this.#name = name
    this.#age = age
    
  }
  getName () { // Este metodo es un metodo publico
    return this.#name;
  }
  // Tambien podemos crear metodos privados:
  #getAge() {
    return this.#name;
  }
}

const persona = new Persona("Tomas", 20);
console.log(persona.name); // Esto ya no funciona más, ya que nuestro objeto está privado

// Para poder acceder a la propiedad name --> debemos llamar al metodo que se creó, la cual retorna el nombre;
console.log(persona.getName())