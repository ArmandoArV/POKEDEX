
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

// from the poks array, create a new array of unique types and store it in the types variable
// and only keep the first type of each pokemon
const types = poks.reduce((acc, cur) => {
    if (!acc.includes(cur.type[0])) {
        acc.push(cur.type[0]);
    }
    return acc;
}
, []);

// create an array of Pokedex objects only with the relevant information for the pokedex in the class
const pokedex = poks.map(pok => {
    return new Pokedex(pok.abilities, pok.weakness, pok.name, pok.type, pok.ThumbnailImage, pok.id);
}
);

// create a function for only keeping the first type of each pokemon
const onlyFirstType = pokedex.map(pok => {
    return new Pokedex(pok.abilities, pok.weakness, pok.name, pok.type[0], pok.ThumbnailImage, pok.id);
}
);


// for every type in the types array
for(var i = 0; i < types.length; i++){
    // for every pokemon in the onlyFirstType array
    for(var j = 0; j < onlyFirstType.length; j++){
        // if the type of the pokemon is the same as the type in the types array
        if(onlyFirstType[j].getType() == types[i]){
            // add the pokemon to the corresponding div in the pokedex
            let ul = document.getElementById(ids[i]);
            let li = document.createElement("li");
            let p = document.createElement("p");
            li.setAttribute("id", onlyFirstType[j].getId());
            li.setAttribute("class", "pokemon");
            li.setAttribute("onclick", "showPokemon(this.id)");
            let img = document.createElement("img");
            img.setAttribute("src", onlyFirstType[j].getThumbnailImage());
            // here we add the name of the pokemon to the image
            let name = onlyFirstType[j].getName();
            let name_header = document.createElement("h3");
            name_header.innerHTML = name;
            name_header.setAttribute("class", "pokemon_name");
            let abilities = onlyFirstType[j].getAbilities();
            let weakness = onlyFirstType[j].getWeakness();
            let type = onlyFirstType[j].getType();
            let id = onlyFirstType[j].getId();
            let abilities_header = document.createElement("h4");
            abilities_header.innerHTML = "Abilities: " + abilities;
            let weakness_header = document.createElement("h4");
            weakness_header.innerHTML = "Weakness: " + weakness;
            let type_header = document.createElement("h4");
            type_header.innerHTML = "Type: " + type;
            p.appendChild(img);
            p.appendChild(name_header);
            p.appendChild(abilities_header);
            p.appendChild(weakness_header);
            p.appendChild(type_header);
            li.appendChild(p);
            ul.appendChild(li);
        }
    }
}
