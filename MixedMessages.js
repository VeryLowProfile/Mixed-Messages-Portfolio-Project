//Storing all message part
const animal = ["finch", "ox", "lemur", "lynx", "hyena", "otter", "crow", "canary", "sheep", "cougar", "gorilla", "aardvark", "donkey", "mole", "mongoose", "dog", "leopard", "elk", "turtle", "deer", "bear", "fox", "bison", "dingo", "parrot"];
const dyno = ["T-Rex", "Triceratops", "Velociraptor", "Avimimus", "Archaeornis", "Nipponosaurus", "Loricatosaurus", "Erectopus", "Brontomerus", "Saurornitholestes", "Lancangjiangosaurus", "Bagaraatan", "Sauraechinodon", "Vitakridrinda", "Kuszholia", "Jintasaurus", "Walkersaurus", "Technosaurus", "Tianyulong", "Coelophysis", "Volkheimeria", "Walgettosuchus", "Dyoplosaurus", "Agnosphitys", "Lengosaurus"];
const cocktail = ["Royal Bermuda Cocktail", "Orange Tundra", "Seven and Seven", "Sangrita","Cosmopolitan", "Flaming Dr Pepper", "Dark 'N' Stormy", "Horse's Neck", "Savoy Affair", "Hennchata", "Mimosa", "Karsk", "Appletini", "Tamagozake", "Whiskey sour", "Caipivodka", "Gibson", "The Last Word", "Prairie Fire", "Orange Tundra", "Agua de Valencia", "Chocolate martini", "Caribou Lou", "Jazmin Sour", "Mimosa",];
const flower = ["clover", "babys breath", "rose", "rosemary", "columbine", "amaryllis", "carnation", "anemone", "sunflower", "bluebell", "edelweiss", "gladiolus", "jasmine", "petunia", "azalea"];
const ascii = "     _.-._         ..-..         _.-._\n    (_-.-_)       /|'.'|\\       (_'.'_)\n  mrf./\-/.        \\)\\-/(/        ,-.-.\n  __/ /-. \\__   __/ ' ' \\__   __/'-'-'\\__\n ( (___/___) ) ( (_/-._\\_) ) ( (_/   \\_) )\n '.Oo___oO.'   '.Oo___oO.'   '.Oo___oO.'"

const categories = ["animal", "dyno", "cocktail", "flower"];

const generateRandomNumber = (maxRange) => {
    return Math.floor(Math.random() * maxRange)
} 

const getArticle = (string) => {
    let firstChar = string[0].toLowerCase();
    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u"){
        return "an";
    } else {
        return 'a';
    }
} 

const printQuote = (category, random) => {
    console.log(`If you were ${getArticle(category)} ${category} you would be ${getArticle(random)} ${random}.`);
}

const generateQuotes = () => {
    for (let i = 0; i < categories.length; i++){
        switch (categories[i]){
            case "animal":
                random = generateRandomNumber(animal.length);
                printQuote(categories[i],animal[random]);
                break;
            case "dyno":
                random = generateRandomNumber(dyno.length);
                printQuote(categories[i],dyno[random]);
                break;
            case "cocktail":
                random = generateRandomNumber(cocktail.length);
                printQuote(categories[i],cocktail[random]);
                break;
            case "flower":
                random = generateRandomNumber(flower.length);
                printQuote(categories[i],flower[random]);
                break;        
        }
    }
    console.log(ascii);
}

generateQuotes();

