class Formatter {

  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let stringArr = this.capitalize(string).split(" ")
    let unchangedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArr = stringArr.map(string=>{
      if (unchangedWords.includes(string)){
        return string
      } else {
        return this.capitalize(string)
      }
    })
    stringArr = stringArr.join(" ")
    return stringArr
  }
}