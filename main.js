const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

let num1 = Math.floor(Math.random() * 6) + 1;
let dice1 = "img/inverted-dice-" + num1 + ".png";
player1.src = dice1;

let num2 = Math.floor(Math.random() * 6) + 1;
let dice2 = "img/inverted-dice-" + num2 + ".png";
player2.src = dice2;

if (num1 > num2) {
  document.querySelector("#cup1").style.visibility = "visible";
} else if (num2 > num1) {
  document.querySelector("#cup2").style.visibility = "visible";
} else {
  console.log("draw");
  document.querySelector("h1").textContent = "it's a draw!";
}
