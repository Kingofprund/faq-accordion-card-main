const arrows = document.querySelectorAll(".arrow");

// for (let i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", () => {
//     const questionTitle = arrow[i].parentElement.querySelector("h2");
//     const answer = arrow[i].parentElement.querySelector("p");

//     questionTitle.classList.toggle("color");
//     answer.classList.toggle("hidden");
//   });
// }
arrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    const questionTitle = arrow.parentElement.querySelector("h2");
    const answer = arrow.parentElement.nextElementSibling;

    questionTitle.classList.toggle("color");
    answer.classList.toggle("hidden");
  });
});

// for (let i = 0; i < arrows.length; i++) {
//   let button = arrows[i];
//   button.addEventListener("click", e => {
//     let buttonClicked = e.target;
//     const questionTitle = buttonClicked.parentElement.querySelector("h2");

//     questionTitle.classList.toggle("color");
//   });
// }
