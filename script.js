// async function getPoke() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const data = await res.json();
//   const result = data.results;
//   console.log(res);
// }
// getPoke();

const container = document.querySelector(".container");
// const clickme = document.getElementById("clickme");
async function getCard(amt) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amt}`);
  const data = await res.json();
  console.log(data.results);
  for (let i = 1; i <= amt; i++) {
    const poke = document.createElement("div");
    poke.classList.add("poke");
    poke.style.background = `center/contain  no-repeat url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png) `;
    poke.style.backgroundColor = "rgba(255, 255, 255, 0.399)";
    poke.innerHTML = ` <div class="num">#${i}</div>

    <div class="name">${data.results[i - 1].name}</div>`;
    container.appendChild(poke);
  }
}
getCard(100);
// clickme.addEventListener("click", () => {
//   getCard(100);
// });
