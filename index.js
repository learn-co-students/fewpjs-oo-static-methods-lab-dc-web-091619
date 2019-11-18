class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const new_arr = []
    string = string.split(" ");
    string.forEach(word => {
      if (!arr.includes(word) || word === string[0]) {
        new_arr.push(word.charAt(0).toUpperCase() + word.slice(1))
      } else {
        new_arr.push(word)
      }
    })
    return new_arr.join(" ")
  }
}