const actualColorInContainer = document.querySelector(".actual-color-number");
const buttonClick = document.querySelector(".button-set-color");

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

buttonClick.addEventListener("click", function () {
  let newHex = `#`;

  for (let i = 0; i < 6; i++) {
    let ranNumber = Math.trunc(Math.random() * hexArr.length);
    newHex += hexArr[ranNumber];
  }
  actualColorInContainer.textContent = newHex;
  document.body.style.backgroundColor = newHex;
  actualColorInContainer.style.backgroundColor = newHex;
});
