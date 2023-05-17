// Punto 1

function withoutParams(){
 return true
}

// Punto 2
function resolveAfter5Seconds() {
 return new Promise(resolve => {
  setTimeout(() => {
   resolve("Hola")
  }, 5000)
 })
}

async function AwaitPromise() {
 resolveAfter5Seconds().then(result => console.log(result))
}

// Punto 3

function* idGenerator() {
 let id = 1;
 while(true){
  id *= 2;
  yield id;
 }
}

const id = idGenerator();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(withoutParams());
AwaitPromise();

