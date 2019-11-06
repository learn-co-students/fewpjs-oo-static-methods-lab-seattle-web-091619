class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(str) {
    let ignoreThese = ['the','a','an','but','of','and','for','at','by','from']
    let titleizedStr = []
    let split = str.split(" ")
    for (let i=0;i<split.length;i++)
      if (i==0){
        titleizedStr.push(this.capitalize(split[i]))
      }else {
        if (ignoreThese.includes(split[i])){
          titleizedStr.push(split[i])
        }else {
          titleizedStr.push(this.capitalize(split[i]))
        }
      }
    return titleizedStr.join(" ")
  }
}

