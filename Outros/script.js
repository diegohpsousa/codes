function spinWords(string) {
    let palavras = string.split(" ");
    let newString = "";

    for (i = 0; i < palavras.length; i++) {
        word = palavras[i];
        letras = word.split("");
        if (letras.length >= 5) {
            let inverso = "";
            for (y = letras.length - 1; y >= 0; y--) {
                inverso += letras[y];
            }
            palavras[i] = inverso;
        }
        if(newString === ""){
            newString += palavras[i];
        }else{
            newString += " "+palavras[i];
        }
       
    }

    return newString;
    //TODO Have fun :)

    
}

console.log(spinWords("Eu amo a Mamãe"));