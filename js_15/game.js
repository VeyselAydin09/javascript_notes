/* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
// let topScore = 0;

//? localStorage'de topScore adiyla bir degisken olustur.
let topScore = localStorage.getItem("topScore") || 0;

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");