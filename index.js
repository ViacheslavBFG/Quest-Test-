const CURRENT_YEAR = 2024;
const CORRECT_ANSWER = "Right answer, well done";
const ERROR_ANSWER = "Incorrect answer";

const inputYearNode = document.querySelector(".input-year");
const btnYearNode = document.querySelector(".btn-year");
const outputYearNode = document.querySelector(".result-year");

btnYearNode.addEventListener("click", function () {
  const inputValue = inputYearNode.value;
  if (!inputValue) {
    return;
  }
  const answer = Number(inputYearNode.value);
  let output = CORRECT_ANSWER;

  if (answer !== CURRENT_YEAR) {
    output = ERROR_ANSWER;
  }
  outputYearNode.innerText = output;
});
