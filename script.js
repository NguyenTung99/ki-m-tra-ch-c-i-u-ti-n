//string 1: Nguyen van Nam

// string 2: NGUYEN VAN NAM

// string 3: nguyen van Nam

let regexp = /^[A-Z]/;

function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}