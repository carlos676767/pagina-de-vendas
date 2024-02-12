import Swal from 'sweetalert2';
const input = document.getElementById("input") as HTMLInputElement;

const mensagemDeEnvioEmail = () => {
    Swal.fire({
      title: "Email Enviado",
      text: "Seu email foi enviado com sucesso!",
      icon: "success",
    });
  };

const verificarInputValor = () => {
  let mostrar = document.querySelector(".mostrar") as HTMLParagraphElement;
  let obterDadosInput = input.value;
  if (obterDadosInput === "") {
    mostrar.classList.add("textoBlack");
    mostrar.innerHTML = "Digite um email valido.";
    input.classList.add("inputVermelho");
  }else{
    mensagemDeEnvioEmail()
  }
};

const botaoVerificar = document.getElementById("botaoVerificar");

botaoVerificar?.addEventListener("click", () => {
  verificarInputValor();
});
