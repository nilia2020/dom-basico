const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(h1.innerText);

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

console.log({ h1 });

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";

h1.setAttribute("pantalla", "LG");
console.log(h1.getAttribute("pantalla"));
h1.classList.add("rojo");
h1.classList.remove("rojo");
h1.classList.toggle("verde");
console.log(h1.classList.contains("verde"));

input.value = "456";

console.log(document.createElement("img"));
console.log(document.createElement("span"));

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://rtp-design.vercel.app/assets/Z-Flex.071d0f90.svg"
);

img.setAttribute("width", 100);

console.log(img);

pid.innerText = "";

pid.appendChild(img);
