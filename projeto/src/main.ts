import Swal from "sweetalert2";
const input = document.getElementById("input") as HTMLInputElement;

const mensagemDeEnvioEmail = () => {
  Swal.fire({
    title: "Email Enviado",
    text: "Seu email foi enviado com sucesso!",
    icon: "success",
  });
};

const verificarInputValor = () => {
  const mostrar = document.querySelector(".mensagem") as HTMLParagraphElement;
  const obterDadosInput = input.value;
  const dominiosValidosRegex =
    /@gmail\.|@yahoo\.|@outlook\.|@aol\.|@icloud\.|@protonmail\.|@zoho\.|@gmx\.|@mail\.|@yandex\./;
  if (dominiosValidosRegex.test(obterDadosInput)) {
    mensagemDeEnvioEmail();
    input.classList.add("inputverde");
    input.classList.remove("inputVermelho");
    mostrar.textContent = "";
  } else {
    mostrar.textContent = "Digite um email valido";
    input.classList.remove("inputverde");
    input.classList.add("inputVermelho");
  }
};

const botaoVerificar = document.getElementById("botaoVerificar");
botaoVerificar?.addEventListener("click", () => {
  verificarInputValor();
});

type Cores = {
  corPreta: string;
  corWhite: string;
};

const darkMode = () => {
  let inputChecked = document.getElementById(
    "darkModeToggle"
  ) as HTMLInputElement;
  const body = document.body;

  const cores: Cores = {
    corPreta: "rgba(0, 0, 0, 0.5)",
    corWhite: "white",
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
    console.log(recuperarValorEstado);

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