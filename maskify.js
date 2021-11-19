function MaskCharacter(str) {

    return ('' + str).slice(0, -4)
        .replace(/./g, "#")
        + ('' + str).slice(-4);
}
var strang = "29092082"
// Call function without giving value of n
console.log(MaskCharacter(strang));
////test