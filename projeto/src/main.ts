import Swal from "sweetalert2";
import {atualizarValoresEmIngles, atualizarValoresEmPortugues,} from "./traducao";

export const input = document.getElementById("input") as HTMLInputElement;
export const select = document.querySelector("select") as HTMLSelectElement;
export const mostrar = document.querySelector(".mensagem") as HTMLParagraphElement;

const botao = document.getElementById("teste");
botao?.addEventListener("click", () => {
  localStorage.clear();
});

const mensagemDeEnvioEmail = () => {
  Swal.fire({
    title: "Email Enviado",
    text: "Seu email foi enviado com sucesso!",
    icon: "success",
  });
};

const verificarInputValor = () => {
  const obterDadosInput = input.value;
  const dominiosValidosRegex =
    /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (dominiosValidosRegex.test(obterDadosInput)) {
    mensagemDeEnvioEmail();
    input.classList.add("inputverde");
    input.classList.remove("inputVermelho");
    mostrar.textContent = "";
  } else {
    mostrar.textContent = "Digite um email valido";
    input.classList.remove("inputverde");
    input.classList.add("inputVermelho");
    mostrar.textContent = "Digite um email valido.";
  }
};
export const botaoVerificar = document.getElementById(
  "botaoVerificar"
) as HTMLButtonElement;

botaoVerificar?.addEventListener("click", () => {
  verificarInputValor();
});

type Cores = {
  corPreta: string;
  corWhite: string;
  corAzul: string;
};

const darkMode = () => {
  let inputChecked = document.getElementById(
    "darkModeToggle"
  ) as HTMLInputElement;
  const body = document.body;

  const cores: Cores = {
    corPreta: "#F0F0F0",
    corWhite: "white",
    corAzul: "hsl(243, 87%, 12%);",
  };
  const bodyBlack = () => {
    body.style.backgroundColor = cores.corPreta;
  };

  const bodyWhite = () => {
    body.style.backgroundColor = cores.corWhite;
  };

  inputChecked.addEventListener("change", () => {
    if (inputChecked.checked) {
      bodyBlack();
      localStorage.setItem("black", cores.corPreta);
      localStorage.setItem("valorCheckado", inputChecked.checked.toString());
    } else {
      bodyWhite();
      localStorage.setItem("valorCheckado", inputChecked.checked.toString());
    }
  });

  const savedLocalStorageData = () => {
    const recuperarValorBlack = localStorage.getItem("black");
    const recuperarValorEstado = localStorage.getItem("valorCheckado");
    if (
      recuperarValorBlack === cores.corPreta &&
      recuperarValorEstado == "true"
    ) {
      bodyBlack();
      inputChecked.checked = true;
    } else {
      bodyWhite();
      inputChecked.checked = false;
    }
  };
  savedLocalStorageData();
};

darkMode();

const alterarTituLoBody = () => {
  const titulo = document.title;
  addEventListener("blur", () => {
    document.title = "volte😔";
  });

  addEventListener("focus", () => {
    document.title = titulo;
  });
};

alterarTituLoBody();
select.addEventListener("change", () => {
  if (select.options[0].selected) {
    localStorage.setItem("valor", select.options[0].value);
  } else if (select.options[1].selected) {
    localStorage.setItem("valor", select.options[1].value);
  }
  const salvarValor = localStorage.getItem("valor");
  if (salvarValor === "Ingles") {
    atualizarValoresEmIngles();
  } else {
    atualizarValoresEmPortugues();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log(localStorage.getItem("valor"));
  const salvarValor = localStorage.getItem("valor");
  if (salvarValor === "Ingles") {
    atualizarValoresEmIngles();
    select.value = "Ingles";
  } else {
    atualizarValoresEmPortugues();
    select.value = "portugues";
  }
});

const gerarImagensProgramacao = () => {
  const img1 = document.getElementById("imagem1") as HTMLImageElement;
  const img2 = document.getElementById("imagem2") as HTMLImageElement;
  const img3 = document.getElementById("imagem3") as HTMLImageElement;
  fetch(
    "https://api.unsplash.com/search/photos/?query=programming&client_id=hzk92Q_lgmqyI7V-knidJ3MBD0jzoxwuFLMhNidCjjY"
  )
    .then((response) => response.json())
    .then((data) => {
      img1.src = data.results[1].urls.regular;
      img2.src = data.results[3].urls.regular;
      img3.src = data.results[9].urls.regular;
    })
    .catch((error) => {
      console.log("Nao foi possivel carregar as imagens", error);
    });
};

gerarImagensProgramacao();
