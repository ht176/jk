function match (string) {
  for (let c of string) {
    if (c === 'a') {
      return true
    }
    // return false
  }
}

console.log(match('I am groot'));