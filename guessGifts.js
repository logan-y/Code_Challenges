var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGifts = (wishArr, presArr) => {
var goodGuesses = [];
    var r = [];
    presents.forEach(function(p){
      wishlist.forEach(function(w){
        if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && r.indexOf(w.name) == -1) goodGuesses.push(w.name);
      });
    });
return goodGuesses;
}

console.log(guessGifts(wishlist, presents));










