
let buttonStyle = document.querySelector("btn");
buttonStyle.style.outline = "thick solid #89CFF0";

function shoot(value) {
  let user = value;
  const choices = new Array("rock", "paper", "scissors");
  let computer = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("results").innerText = `${user} vs. ${computer}`;

  if (user === computer) {
    document.getElementById("winner").innerText = "It's a tie!";
  }
  if (user === "rock" && computer === "paper") {
    document.getElementById("winner").innerText = "Paper wins!";
  }
  if (user === "rock" && computer === "scissors") {
    document.getElementById("winner").innerText = "Rock wins!";
  }
  if (user === "paper" && computer === "scissors") {
    document.getElementById("winner").innerText = "Scissors wins!";
  }
  if (user === "paper" && computer === "rock") {
    document.getElementById("winner").innerText = "Paper wins!";
  }
  if (user === "scissors" && computer === "rock") {
    document.getElementById("winner").innerText = "Rock wins!";
  }
  if (user === "scissors" && computer === "paper") {
    document.getElementById("winner").innerText = "Scissors wins!";
  }
}
