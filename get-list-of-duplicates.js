// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
const getListOfDuplicatesUsingFilter = (n = 1000000) => {
  const list = Array(n + 1).fill('').map(v => ~~(Math.random() * n + 1));
  const uniqueValues = [...(new Set(list))];

  return uniqueValues.filter(v1 => {
    // Filter algorithm
    return list.filter(v2 => v2 === v1).length > 1
  });
}

const getListOfDuplicatesUsingIndex = (n = 1000000) => {
  const list = Array(n + 1).fill('').map(v => ~~(Math.random() * n + 1));
  const uniqueValues = [...(new Set(list))];

  return uniqueValues.filter(v1 => {
    // indexOf and lastIndexOf algorithm
    const io = list.indexOf(v1),
          lio = list.lastIndexOf(v1);
    return io > 0 && io != lio;
  });
}

// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
const getListOfDuplicatesUsingObject = (n = 10000) => {
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

module.exports = {
  getListOfDuplicatesUsingObject,
  getListOfDuplicatesUsingFilter,
  getListOfDuplicatesUsingIndex
};
