const getListOfDuplicates = require('./get-list-of-duplicates');
// process.stdout.write('\033c');
const n = process.argv && process.argv[2] && +process.argv[2].split('=')[1] || 1234;
const print = process.argv && process.argv[3] && process.argv[3].split('=')[1] || false;
let t = process.hrtime();

const elementsThatRepeat = getListOfDuplicates.getListOfDuplicatesUsingObject(n);

t = process.hrtime(t);
console.log(`Execution time is ${t[0] + (~~(t[1] / 100000)/10000)} seconds`)
console.log('*************************************\nNumber of elements that repeat: %s', elementsThatRepeat.length);

// Print elements
elementsThatRepeat && console.log(elementsThatRepeat.toString());
