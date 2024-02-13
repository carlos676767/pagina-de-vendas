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
    input.classList.remove("inputVermelho")
    input.classList.add("inputverde")
    mostrar.textContent = ""
  }
};


const botaoVerificar = document.getElementById("botaoVerificar");

botaoVerificar?.addEventListener("click", () => {
  verificarInputValor();
});


const darkMode = () => {
  const armezenarBody = document.body
  const bodyBlack = () => {
    armezenarBody.style.backgroundColor = `black`
  }
  const darkModeButton = document.getElementById("darkModeToggle") as HTMLInputElement;
  darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
      bodyBlack()
      localStorage.setItem("black", "black")
    }
  });

  const salvarDarkMode = () => {
    const recuperarValor = localStorage.getItem("black")
    console.log(recuperarValor);
    if (recuperarValor === `black`) {
      bodyBlack()
    }
  }

  salvarDarkMode()
};

darkMode();


