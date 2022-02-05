//Storing all message part
const animal = ["finch", "ox", "lemur", "lynx", "hyena", "otter", "crow", "canary", "sheep", "cougar", "gorilla", "aardvark", "donkey", "mole", "mongoose", "dog", "leopard", "elk", "turtle", "deer", "bear", "fox", "bison", "dingo", "parrot"];
const dyno = ["T-Rex", "Triceratops", "Velociraptor", "Avimimus", "Archaeornis", "Nipponosaurus", "Loricatosaurus", "Erectopus", "Brontomerus", "Saurornitholestes", "Lancangjiangosaurus", "Bagaraatan", "Sauraechinodon", "Vitakridrinda", "Kuszholia", "Jintasaurus", "Walkersaurus", "Technosaurus", "Tianyulong", "Coelophysis", "Volkheimeria", "Walgettosuchus", "Dyoplosaurus", "Agnosphitys", "Lengosaurus"];
const cocktail = ["Royal Bermuda Cocktail", "Orange Tundra", "Seven and Seven", "Sangrita","Cosmopolitan", "Flaming Dr Pepper", "Dark 'N' Stormy", "Horse's Neck", "Savoy Affair", "Hennchata", "Mimosa", "Karsk", "Appletini", "Tamagozake", "Whiskey sour", "Caipivodka", "Gibson", "The Last Word", "Prairie Fire", "Orange Tundra", "Agua de Valencia", "Chocolate martini", "Caribou Lou", "Jazmin Sour", "Mimosa",];
const flower = ["clover", "babys breath", "rose", "rosemary", "columbine", "amaryllis", "carnation", "anemone", "sunflower", "bluebell", "edelweiss", "gladiolus", "jasmine", "petunia", "azalea"];

const generateRandomNumber = (maxRange) => {
    return Math.floor(Math.random() * maxRange)
} 

const getArticle = (string) => {
    let firstChar = string[0].toLowerCase();
    if (firstChar === a || firstChar === e || firstChar === i || firstChar === o || firstChar === u){
        return "an";
    } else {
        return 'a';
    }
} 

const generateQuotes = () => {
    let quotes = {
            animal: "",
            dyno: "",
            cocktail: "",
            flower: ""
        }
    let keys = quotes.keys();    
    for (let i = 0; i < keys.length; i++){
        switch (keys[i]){
            case "animal":
                let animal = generateRandomNumber(animal.length);
                let article = getArticle(animal);
                console.log(`If you were an animal you would be ${article} ${animal}`);
                break;
            case "dyno":
                let dyno = generateRandomNumber(dyno.length);
                let article = getArticle(dyno);
                console.log(`If you were an animal you would be ${article} ${dyno}`);
                break;
            case "cocktail":
                let cocktail = generateRandomNumber(cocktail.length);
                let article = getArticle(cocktail);
                console.log(`If you were an animal you would be ${article} ${cocktail}`);
                break;
            case "flower":
                let flower = generateRandomNumber(flower.length);
                let article = getArticle(flower);
                console.log(`If you were an animal you would be ${article} ${flower}`);
                break;        
        }
    }
}

generateQuotes();

