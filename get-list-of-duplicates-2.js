// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
const getListOfDuplicates = (n = 10000) => {
  let length = n + 1,
      i = 0,
      o = {};
  for(i; i < length; i++) {
    const value = ~~(Math.random() * length);
    if (o.hasOwnProperty(value)) {
      o[value]++;
    } else {
      o[value] = 1;
    }
  }

  return Object.keys(o).filter(key => o[key] > 1);
}

module.exports.getListOfDuplicates = getListOfDuplicates;