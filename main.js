function count(string) {
    let count = {
    }
    string.split('').forEach((x) => {
      if (count.hasOwnProperty(x)) count[x] = count[x] + 1
      else count[x] = 1
    })
     return count;
   }