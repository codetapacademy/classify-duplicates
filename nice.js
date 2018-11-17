// process.stdout.write('\033c');
const n = process.argv && +process.argv[2].split('=')[1];

// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
let t = process.hrtime();

const niceFunction = (n = 1000000) => {
  const list = Array(n + 1).fill('').map(v => ~~(Math.random() * n + 1));
  const uniqueValues = [...(new Set(list))];

  return uniqueValues.filter(v1 => {
    // indexOf and lastIndexOf algorithm
    const io = list.indexOf(v1),
          lio = list.lastIndexOf(v1);
    return io > 0 && io != lio;
    // Filter algorithm
    return list.filter(v2 => v2 === v1).length > 1
  });
}
const elementsThatRepeat = niceFunction(n);
t = process.hrtime(t);
console.log(`Execution time is ${t[0] + (~~(t[1] / 100000)/10000)} seconds`)
console.log('*************************************\nNumber of elements that repeat: %s', elementsThatRepeat.length);
