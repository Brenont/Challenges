// Questão 2
const combines = {
  "{": "}",
  "(": ")",
  "[": "]"
};

const bracketValidation = bracket => {
  const bracketArr = bracket.split("");

  let secondIndex = bracketArr.length - 1;

  for (let i = 0; i < bracketArr.length / 2; i++) {
    let firstBracket = bracketArr[i];
    let secondBracket = bracketArr[secondIndex];

    if (secondBracket !== combines[firstBracket]) {
      return console.log("NÃO");
    }

    secondIndex--;
  }
  console.log("SIM");
};

bracketValidation("{[()]}"); //SIM
bracketValidation("{[(])}"); //NÃO
bracketValidation("{{[[(())]]}}"); //SIM
