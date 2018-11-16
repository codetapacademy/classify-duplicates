// process.stdout.write('\033c');
const n = process.argv && +process.argv[2].split('=')[1];

// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
let t = process.hrtime();

const niceFunction = (n = 1000000) => {
  const list = Array(n + 1).fill('').map(v => ~~(Math.random() * n + 1));
  // console.log('Generated list', list);
  // const uniqueValues = Array.from(new Set(list))
  const uniqueValues = [...(new Set(list))]
  return uniqueValues.filter(v1 => {
    // console.log(list.filter(v2 => v2 === v1))
    return list.filter(v2 => v2 === v1).length > 1
  });
}
const elementsThatRepeat = niceFunction(n);
t = process.hrtime(t);
console.log(`Execution time is ${t[0] + (~~(t[1] / 1000000)/1000)} seconds`)
console.log('*************************************\nNumber of elements that repeat: %s', elementsThatRepeat.length);
