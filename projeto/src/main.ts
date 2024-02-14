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

type Cores = {
  cor: string
}

const darkMode = () => {
  const inputChecked = document.getElementById(
    "darkModeToggle"
  ) as HTMLInputElement;
  const body = document.body;

  const cores: Cores = {
    cor: "black",
  };

  const bodyBlack = () => {
    body.style.backgroundColor = cores.cor;
  };

  const armazenarValor: string = inputChecked.checked = true
  

  inputChecked.addEventListener("change", () => {
    if (inputChecked.checked) {
      bodyBlack();
      localStorage.setItem("black", cores.cor)
      localStorage.setItem("valorCheckado", armazenarValor)
    } else {
      alert(`nao selecionado`);
    }
  });

  const savedLocalStorageData = () => {
    const recuperarValorBlack = localStorage.getItem("black")
    if (recuperarValorBlack === cores.cor) {
      bodyBlack()
    }
  }

  savedLocalStorageData()
};


darkMode()