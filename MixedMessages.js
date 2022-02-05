//Storing all message part
const categories = {
    animal: ["finch", "ox", "lemur", "lynx", "hyena", "otter", "crow", "canary", "sheep", "cougar", "gorilla", "aardvark", "donkey", "mole", "mongoose", "dog", "leopard", "elk", "turtle", "deer", "bear", "fox", "bison", "dingo", "parrot"],
    dyno: ["T-Rex", "Triceratops", "Velociraptor", "Avimimus", "Archaeornis", "Nipponosaurus", "Loricatosaurus", "Erectopus", "Brontomerus", "Saurornitholestes", "Lancangjiangosaurus", "Bagaraatan", "Sauraechinodon", "Vitakridrinda", "Kuszholia", "Jintasaurus", "Walkersaurus", "Technosaurus", "Tianyulong", "Coelophysis", "Volkheimeria", "Walgettosuchus", "Dyoplosaurus", "Agnosphitys", "Lengosaurus"],
    cocktail: ["Royal Bermuda Cocktail", "Orange Tundra", "Seven and Seven", "Sangrita","Cosmopolitan", "Flaming Dr Pepper", "Dark 'N' Stormy", "Horse's Neck", "Savoy Affair", "Hennchata", "Mimosa", "Karsk", "Appletini", "Tamagozake", "Whiskey sour", "Caipivodka", "Gibson", "The Last Word", "Prairie Fire", "Orange Tundra", "Agua de Valencia", "Chocolate martini", "Caribou Lou", "Jazmin Sour", "Mimosa",],
    flower: ["clover", "babys breath", "rose", "rosemary", "columbine", "amaryllis", "carnation", "anemone", "sunflower", "bluebell", "edelweiss", "gladiolus", "jasmine", "petunia", "azalea"]
}

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
    const keys = Object.keys(categories); 
    keys.forEach(category => {
        randStuff = categories[category][generateRandomNumber(categories[category].length)]; 
        printQuote(category,randStuff);
    })
}

generateQuotes();

