const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

function displayCard1() {
  card2.style.display = "none";
  card1.style.display = "block";
}

function displayCard2() {
  card1.style.display = "none";
  card2.style.display = "flex";
}
