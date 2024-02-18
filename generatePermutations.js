//1)generatePermutations
function generatePermutations(numbers) {
  const permutations = [];
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        if (i !== j && j !== k && i !== k) {
          permutations.push([numbers[i], numbers[j], numbers[k]]);
        }
      }
    }
  }
  
  return permutations;
}

const numbers = [1, 2, 3];
const result = generatePermutations(numbers);
console.log(result);
