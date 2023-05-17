import axios from "axios";
axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(res => console.log(res)).catch(error => console.log(error))