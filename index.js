class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string) {
    const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const splitted = string.split(" ")
    let words = [];
    debugger
    for (let i=0; i < splitted.length; i++) {
      if (i === 0) {
        words.push(splitted[i][0].toUpperCase() + splitted[i].slice(1))
      } else {
        if (exception.includes(splitted[i])) {
          words.push(splitted[i])
        } else {
          words.push(splitted[i][0].toUpperCase() + splitted[i].slice(1))
        }
      }
    }
    return words.join(" ")
  }
}