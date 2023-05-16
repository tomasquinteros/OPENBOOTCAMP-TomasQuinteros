const shoppingList = ["Yerba", "Dulce de Leche", "Leche", "Fideos", "Bifes"];
shoppingList.push("Aceite de Girasol");
console.log(shoppingList)
shoppingList.pop();
console.log(shoppingList)

const FavMoviesList = [{title: "Gladiador",director: "Ridley Scott",date: 2000},{title: "Harry Potter y la orden del Fénix",director: "David Yates",date: 2007},{title: "Harry Potter y el misterio del príncipe",director: "David Yates",date: 2009}];

const NewListMovies = FavMoviesList.filter(value => value.date > 2010);
console.log(NewListMovies);

const directores = FavMoviesList.map(director => director.director)
console.log(directores);

const nameMovies = FavMoviesList.map(name => name.title);
console.log(nameMovies);

const newArray = nameMovies.concat(directores);
console.log(newArray);

const newArray1 = [...directores, ...nameMovies];
console.log(newArray1);
