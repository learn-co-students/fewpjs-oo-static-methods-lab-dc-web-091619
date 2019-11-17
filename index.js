class Formatter {
  static capitalize( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize( string ) {
    return string.replace(/[^a-zA-Z0-9'-\s]/gi, "")
  }

  static titleize( string ) {
    let titleArray = [];
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    let words = string.split(" ");

    for( let i=0; i < words.length; i++ ) {
      if ( i == 0 ) {
        titleArray.push( this.capitalize( words[i] ) );
      } else if ( exceptions.includes( words[i].toLowerCase() ) ) {
        titleArray.push( words[i] );
      } else {
        titleArray.push( this.capitalize( words[i] ) )
      }
    }

    return titleArray.join(" ");
  }
}