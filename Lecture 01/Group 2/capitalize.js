function capitalize(s) {
    if (!s) {
        return "";
    }
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

let s1 = "palacinka so nutela i banana";
let capitalizetext = capitalize(s1);
console.log(capitalizetext);