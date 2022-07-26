 /*
        Made by: Armando Arredondo Valle
        Date: 21/07/2022
    */
        let title = "";

        const types = ["Plant", "Fire", "Water", "Ground", "Electric"];
        const ids = ["plant_pokemons", "fire_pokemons", "water_pokemons", "ground_pokemons", "electric_pokemons"];
        class Pokemon{
            constructor(type, name, hp, attack, defense, speed){
                this.type = type;
                this.name = name;
                this.hp = hp;
                this.attack = attack;
                this.defense = defense;
                this.speed = speed;
            }
            getType(){
                return this.type;
            }
            getName(){
                return this.name;
            }
            getHP(){
                return this.hp;
            }
            getAttack(){
                return this.attack;
            }
            getDefense(){
                return this.defense;
            }
            getSpeed(){
                return this.speed;
            }
            setType(type){
                this.type = type;
            }
            setName(name){
                this.name = name;
            }
            setHP(hp){
                this.hp = hp;
            }
            setAttack(attack){
                this.attack = attack;
            }
            setDefense(defense){
                this.defense = defense;
            }
            setSpeed(speed){
                this.speed = speed;
            }
            checkTypeInTypes(type){
                for(var i = 0; i < types.length; i++){
                    if(type == types[i]){
                        return true;
                    }
                }
                return false;
            }
            showPokemon(){
                console.log("----------------------------------------------------"+"\n");
                console.log("Type: " + this.type);
                console.log("Name: " + this.name);
                console.log("HP: " + this.hp);
                console.log("Attack: " + this.attack);
                console.log("Defense: " + this.defense);
                console.log("Speed: " + this.speed);
                console.log("Moves: " + this.moves);
            }
        }
    
        var pokemons = [];
        pokemons.push(new Pokemon(types[0], "Bulbasaur", 45, 49, 49, 45, 65));
        pokemons.push(new Pokemon(types[0], "Ivysaur", 60, 62, 63, 60, 80));
        pokemons.push(new Pokemon(types[0], "Venusaur", 80, 82, 83, 80, 100));
        pokemons.push(new Pokemon(types[1], "Charmander", 39, 52, 43, 65, 65));
        pokemons.push(new Pokemon(types[2], "Squirtle", 44, 48, 65, 65, 43));
        pokemons.push(new Pokemon(types[2], "Wartortle", 59, 63, 80, 80, 58));
        pokemons.push(new Pokemon(types[1], "Charmeleon", 58, 44, 58, 80, 65));
        pokemons.push(new Pokemon(types[1], "Charizard", 78, 84, 78, 109, 85));
        pokemons.push(new Pokemon(types[2], "Blastoise", 79, 83, 100, 85, 78));
        pokemons.push(new Pokemon(types[3], "Diglett", 43, 65, 65, 48, 43));
        pokemons.push(new Pokemon(types[4], "Pikachu", 35, 55, 40, 50, 90));
        pokemons.push(new Pokemon(types[4], "Raichu", 60, 90, 55, 90, 110));
        pokemons.push(new Pokemon(types[3], "Sandshrew", 50, 75, 85, 40, 30));
        pokemons.push(new Pokemon(types[3], "Sandslash", 75, 100, 110, 65, 55));
        pokemons.push(new Pokemon(types[4], "Nidoran", 55, 47, 52, 40, 41));
        

        function checkImage(name){
            for(var i = 0; i < pokemons.length; i++){
                if(name == pokemons[i].getName()){
                    return "images/" + name + ".png";
                }
            }
        }

        for(var i = 0; i < pokemons.length; i++){
            var type = pokemons[i].getType();
            for(var j = 0; j < types.length; j++){
                if(type == types[j]){
                    let ul = document.createElement("ul");
                    let li = document.createElement("li");
                    let img = document.createElement("img");
                    let h3 = document.createElement("h3");
                    let p = document.createElement("p");
                    var name = pokemons[i].getName();
                    var hp = pokemons[i].getHP();
                    var attack = pokemons[i].getAttack();
                    var defense = pokemons[i].getDefense();
                    var speed = pokemons[i].getSpeed();
                    var image = checkImage(pokemons[i].getName());
                    let textNode = document.createTextNode(pokemons[i].getName());
                    let textNode2 = document.createTextNode("HP: "+pokemons[i].getHP() + " ");
                    let textNode3 = document.createTextNode("Attack: "+pokemons[i].getAttack() + " ");
                    let textNode4 = document.createTextNode("Defense: "+pokemons[i].getDefense() + " ");
                    let textNode5 = document.createTextNode("Speed: "+pokemons[i].getSpeed() + " ");
                    img.setAttribute("src", "images/" + pokemons[i].getName() + ".png");
                    img.setAttribute("alt", pokemons[i].getName());
                    img.setAttribute("id", "PokemonImage");
                    h3.appendChild(textNode);
                    p.appendChild(textNode2);
                    p.appendChild(textNode3);
                    p.appendChild(textNode4);
                    p.appendChild(textNode5);
                    li.appendChild(img);
                    li.appendChild(h3);
                    li.appendChild(p);
                    ul.appendChild(li);
                    document.getElementById(ids[j]).appendChild(ul);
                }
            }
        }
