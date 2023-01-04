const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
let counter = 0;
const btnOnClick = () => {
  const suma = Number(input1.value) + Number(input2.value);
  pResult.innerHTML = `Resultado = ${suma}`;
};
