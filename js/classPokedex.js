/*
    Made by: Armando Arredondo Valle
*/

poks = JSON.parse(poke_file).result;

const ids = ["plant_pokemons", "fire_pokemons", "water_pokemons", "ground_pokemons", "electric_pokemons"];

class Pokedex{
    // constructor
    constructor(abilities, weakness, name, type, ThumbnailImage, id) {
        this.abilities = abilities;
        this.weakness = weakness;
        this.name = name;
        this.type = type;
        this.ThumbnailImage = ThumbnailImage;
        this.id = id;
    }
    // getter for the abilities of the pokemon
    getAbilities() {
        return this.abilities;
    }
    // getter for the weakness of the pokemon
    getWeakness() {
        return this.weakness;
    }
    // getter for the name of the pokemon
    getName() {
        return this.name;
    }
    // getter for the type of the pokemon
    getType() {
        return this.type;
    }
    // getter for the thumbnail image of the pokemon
    getThumbnailImage() {
        return this.ThumbnailImage;
    }
    // getter for the id of the pokemon
    getId() {
        return this.id;
    }
}


// function to get the pokemon with the type 
function getPokemonsWithType(type) {
    let pokemons = [];
    for (let i = 0; i < poks.length; i++) {
        if (poks[i].type.includes(type)) {
            pokemons.push(poks[i]);
        }
    }
    return pokemons;
}
const types = poks.reduce((acc, cur) => { // reduce the array to a single object
    if (!acc.includes(cur.type[0])) { // if the type is not in the object
        acc.push(cur.type[0]); // add the type to the object
    } // end if
    return acc; // return the object
} // end function
, []); // end reduce

const pokedex = poks.map(pok => { // create a new array of Pokedex objects
    return new Pokedex(pok.abilities, pok.weakness, pok.name, pok.type, pok.ThumbnailImage, pok.id); // create a new Pokedex object
}
);

const onlyFirstType = pokedex.map(pok => { // create a new array of Pokedex objects
   for (let i = 0; i < pok.type.length; i++) { // for each type of the pokemon
       if (i > 0) { // if the type is not the first type
           pok.type.splice(i, 1); // remove the type
       } // end if
   } // end for
    return pok; // return the pokemon
}
);

// for every type in the types array
for(var i = 0; i < types.length; i++){ // for each type
    for(var j = 0; j < onlyFirstType.length; j++){ // for each pokemon
        if(onlyFirstType[j].getType() == types[i]){
            { // if the pokemon is of the type and has an id
                { // if the pokemon's type is the same as the type
                    let ul = document.getElementById(ids[i]); // get the ul element
                    let li = document.createElement("li"); // create a li element
                    let p = document.createElement("p"); // create a p element
                    li.setAttribute("id", onlyFirstType[i].getId()); // set the id of the li element to the pokemon's id
                    li.setAttribute("class", "pokemon"); // set the class of the li element to "pokemon"
                    li.setAttribute("onclick", "showPokemon(this.id)"); // set the onclick attribute of the li element to "showPokemon(this.id)"
                    let img = document.createElement("img"); // create an img element
                    img.setAttribute("src", onlyFirstType[j].getThumbnailImage()); // set the src attribute of the img element to the pokemon's thumbnail image
                    let name = onlyFirstType[j].getName(); // get the name of the pokemon
                    let name_header = document.createElement("h2"); // create a h2 element
                    name_header.innerHTML = name; // set the innerHTML of the h2 element to the name of the pokemon
                    name_header.setAttribute("class", "pokemon_name"); // set the class of the h2 element to "pokemon_name"
                    let abilities = onlyFirstType[j].getAbilities(); // get the abilities of the pokemon
                    let weakness = onlyFirstType[j].getWeakness(); // get the weakness of the pokemon
                    let type = onlyFirstType[j].getType(); // get the type of the pokemon
                    let id = onlyFirstType[j].getId(); // get the id of the pokemon
                    let id_header = document.createElement("h3"); // create a h3 element
                    id_header.innerHTML = id; // set the innerHTML of the h3 element to the id of the pokemon
                    let abilities_header = document.createElement("h4"); // create a h4 element
                    abilities_header.innerHTML = "Abilities: " + abilities; // set the innerHTML of the h4 element to "Abilities: " + the abilities of the pokemon
                    let weakness_header = document.createElement("h4"); // create a h4 element
                    weakness_header.innerHTML = "Weakness: " + weakness; // set the innerHTML of the h4 element to "Weakness: " + the weakness of the pokemon
                    let type_header = document.createElement("h4");// create a h4 element
                    type_header.innerHTML = "Type: " + type; // set the innerHTML of the h4 element to "Type: " + the type of the pokemon
                    p.appendChild(img);// append the img element to the p element
                    p.appendChild(name_header); // append the h2 element to the p element
                    p.appendChild(abilities_header); // append the h4 element to the p element
                    p.appendChild(weakness_header); // append the h4 element to the p element
                    p.appendChild(type_header); // append the h4 element to the p element
                    p.appendChild(id_header); // append the h3 element to the p element
                    li.appendChild(p);  // append the p element to the li element
                    // here will append the li element to the ul element with the specific id from ids array
                    ul.appendChild(li); // append the li element to the ul element

                } // end if
            } // end if
        } // end if
    } // end for
} // end for
