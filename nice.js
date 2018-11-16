process.stdout.write('\033c');
// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
let t = process.hrtime();
console.log(t)
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
const elementsThatRepeat = niceFunction(100000);
t = process.hrtime(t);
console.log(`Execution time is ${t[0] + (~~(t[1] / 1000000)/1000)} seconds`)
console.log('******************\n', elementsThatRepeat.length);
