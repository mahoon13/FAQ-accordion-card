const body = document.querySelector("body");
let questionBoxs = document.querySelectorAll(".question-box");

questionBoxs.forEach((questionBox) => {
  questionBox.toggled = false;
  questionBox.addEventListener("click", () => {
    if (!questionBox.toggled) {
      questionBox.toggled = true;
      questionBox.classList.add("toggled");
    } else {
      questionBox.toggled = false;
      questionBox.classList.remove("toggled");
    }
  });
});
