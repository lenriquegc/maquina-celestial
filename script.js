const angel1 = ["panzon1.png", "fit1.png", "toxico1.png"];
const angel2 = ["panzon2.png", "fit2.png", "toxico2.png"];
const angel3 = ["panzon3.png", "fit3.png", "toxico3.png"];
const angel4 = ["panzon4.png", "fit4.png", "toxico4.png"];

function spin() {
  const reel1 = angel1[Math.floor(Math.random() * angel1.length)];
  const reel2 = angel2[Math.floor(Math.random() * angel2.length)];
  const reel3 = angel3[Math.floor(Math.random() * angel3.length)];
  const reel4 = angel4[Math.floor(Math.random() * angel4.length)];

  document.getElementById("reel1").src = `img/${reel1}`;
  document.getElementById("reel2").src = `img/${reel2}`;
  document.getElementById("reel3").src = `img/${reel3}`;
  document.getElementById("reel4").src = `img/${reel4}`;

  const result = (reel1 === reel2 && reel2 === reel3 && reel3 === reel4)
    ? "¡JACKPOT CELESTIAL!"
    : "¡Sigue intentando!";

  document.getElementById("result").textContent = result;
}
