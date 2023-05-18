'use strict';
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});
 
process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });
  main();
});
 
function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();
 

// n1 (number of 1)  + n-1 (number of -1) = n (length of array) --> eqn 1
// n1C2 (total number of ways for selecting 2 elements out of n1 options) + n-1C2 (total number of ways for selecting 2 elements out of -1 options)
//= k (total number of ways for selecting 1 elements out of n options) --> eqn 2
// solve 2 eqn --> n1^2-n*n1+(((n^2-n)/2)-k)=0

function main() {
  const noOfTest = parseInt(readline());
  const testArr = [];
  for (let index = 0; index < noOfTest; index++) {
    let input = readline();
    testArr.push(input);
  }
  testArr.map((test) => {
    test = test.split(' ');
    calculateAChar(Number(test[0]), Number(test[1]));
  });
}
function isInt(n) {
  return n % 1 === 0;
}
 
function calculateAChar(n, k) {
  //n1^2-n*n1+(((n^2-n)/2)-k)=0
  //   console.log(n, k);
 
  const c = (n * n - n) / 2 - k;
  let n1 = (n - Math.sqrt(n * n - 4 * c)) / 2;
  let n2 = (n + Math.sqrt(n * n - 4 * c)) / 2;
  // console.log('n', n, 'k', k, 'n1', n1, 'n2', n2);
  if (!isInt(n1) && !isInt(n1)) {
    console.log('NO');
  } else if (isInt(n1)) {
    console.log('YES');
    let arrOfOne = [...Array(n1)].fill(1);
    let arrOfNegOne = [...Array(n - n1)].fill(-1);
    let newArr = arrOfOne.concat(...arrOfNegOne);
    console.log(newArr.join(' '));
    // console.log([...Array(n1)=1].concat([...Array(n-n1)=-1]));
  } else if (isInt(n2)) {
    console.log('YES');
    let arrOfOne = [...Array(n2)].fill(1);
    let arrOfNegOne = [...Array(n - n2)].fill(-1);
    let newArr = arrOfOne.concat(...arrOfNegOne);
    // console.log(arrOfOne.toString().replace(',', ' '));
    console.log(newArr.join(' '));
    // console.log([...Array(n1)=1].concat([...Array(n-n1)=-1]));
  }
}
