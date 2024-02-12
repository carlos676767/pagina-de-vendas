const input = document.getElementById("input") as HTMLInputElement;

const verificarInputValor = () => {
  let mostrar = document.querySelector(".mostrar") as HTMLParagraphElement;
  let obterDadosInput = input.value;
  if (obterDadosInput === "") {;
    mostrar.classList.add("textoBlack")
    mostrar.innerHTML = "Digite um email valido.";
    input.classList.add("inputVermelho")
  }
};

const botaoVerificar = document.getElementById("botaoVerificar");

botaoVerificar?.addEventListener("click", () => {
  verificarInputValor();
});
