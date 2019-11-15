class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(sentence){
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayOfWords = sentence.split(' ');
    let firstWord = arrayOfWords[0][0].toUpperCase() + arrayOfWords[0].slice(1)
    let newSentence = [];

    for(let i = 1; i < arrayOfWords.length; i++){

      if(badWords.includes(arrayOfWords[i])){
        newSentence.push(arrayOfWords[i])
      } else {
        let capitalWord = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1)
        newSentence.push(capitalWord);
      }

    }

    return firstWord + " " + newSentence.join(" ")
  }
}

// Formatter.titleize('getting giggles');
Formatter.titleize("chicken soup with rice and a few other songs");


