    /*
        Made by: Armando Arredondo Valle
        Date: 21/07/2022
    */
    let title = "";

    const types = ["Plant", "Fire", "Water", "Earth", "Electric"];
    const ids = ["plant_pokemons", "fire_pokemons", "water_pokemons", "earth_pokemons", "electric_pokemons"];
    class Pokemon{
        constructor(type, name, hp, attack, defense, speed, moves){
            this.type = type;
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.speed = speed;
            this.moves = moves; 
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
        getMoves(){
            return this.moves;
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
        setMoves(moves){
            this.moves = moves;
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
    pokemons.push(new Pokemon(types[0], "Bulbasaur", 45, 49, 49, 45, 65, ["Tackle", "Growl", "Leech Seed", "Vine Whip"]));
    pokemons.push(new Pokemon(types[0], "Ivysaur", 60, 62, 63, 60, 80, ["Razor Leaf", "Growl", "Leech Seed", "Vine Whip"]));
    pokemons.push(new Pokemon(types[1], "Charmander", 39, 52, 43, 65, 65, ["Scratch", "Growl", "Ember", "Fire Spin"]));
    pokemons.push(new Pokemon(types[2], "Squirtle", 44, 48, 65, 65, 43, ["Tackle", "Growl", "Bubble", "Water Gun"]));
    pokemons.push(new Pokemon(types[3], "Diglett", 43, 65, 65, 48, 43, ["Tackle", "Growl", "Mud Slap", "Earthquake"]));
    pokemons.push(new Pokemon(types[4], "Pikachu", 35, 55, 40, 50, 90, ["Tackle", "Growl", "Thunder Shock", "Thunder"]));

    // Function for check if the type is in the types array
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
                var moves = pokemons[i].getMoves();
                var image = checkImage(pokemons[i].getName());
                let textNode = document.createTextNode(pokemons[i].getName());
                let textNode2 = document.createTextNode("HP: "+pokemons[i].getHP() + " ");
                let textNode3 = document.createTextNode("Attack: "+pokemons[i].getAttack() + " ");
                let textNode4 = document.createTextNode("Defense: "+pokemons[i].getDefense() + " ");
                let textNode5 = document.createTextNode("Speed: "+pokemons[i].getSpeed() + " ");
                let textNode6 = document.createTextNode("Moves: "+pokemons[i].getMoves() + " ");
                img.setAttribute("src", "images/" + pokemons[i].getName() + ".png");
                img.setAttribute("alt", pokemons[i].getName());
                h3.appendChild(textNode);
                p.appendChild(textNode2);
                p.appendChild(textNode3);
                p.appendChild(textNode4);
                p.appendChild(textNode5);
                p.appendChild(textNode6);
                li.appendChild(img);
                li.appendChild(h3);
                li.appendChild(p);
                ul.appendChild(li);
                document.getElementById(ids[j]).appendChild(ul);
            }
        }
    }
    
