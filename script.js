const btnOnClick = (event) => {
  console.log({ event });
  event.preventDefault();
  const suma = Number(input1.value) + Number(input2.value);
  pResult.innerText = `Resultado = ${suma}`;
};

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", btnOnClick);
