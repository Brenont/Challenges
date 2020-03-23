// Questão 1
const searchIndexs = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < target) {
      let range = target - num;

      let secondNum = nums.find(num => num == range);
      let secondNumIndex = nums.indexOf(secondNum);

      if (secondNum && secondNumIndex != i) {
        return [i, secondNumIndex];
      }
    }
  }
  return "Nenhuma combinação encontrada";
};

const numbersInput = [2, 7, 10, 15];
const targetInput = 9;

console.log(searchIndexs(numbersInput, targetInput)); // [0, 1]
