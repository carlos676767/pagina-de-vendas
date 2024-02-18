import Swal from "sweetalert2";
const input = document.getElementById("input") as HTMLInputElement;
console.log(input);


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
    /@gmail\.com|@yahoo\.com|@outlook\.com|@aol\.com|@icloud\.com|@protonmail\.com|@zoho\.com|@gmx\.com|@mail\.com|@yandex\./;
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

const h1 = document.querySelector("h1") as HTMLHeadingElement;
const p = document.querySelectorAll("p")
const h2 = document.querySelector("h2") as HTMLHeadingElement
const a = document.querySelectorAll("a")[0] as HTMLAnchorElement;




const trocarIdioma = () => {
  const select = document.querySelector("select") as HTMLSelectElement;
  type traducaoIngles = {
    traduzirH1: string;
    traduzirP: string;
    traduzirPlacelHoder: string;
    traducaoH2: string;
    traduzirPExplicativo: string
    traduirA: string
  };

  const traducaoIngles: traducaoIngles = {
    traduzirH1:
      "Build a successful career <br> and discover our services <br> now.",
    traduzirP:
      "With Fylo, you can get a job as a developer in an easy way.<br> Come now and check out our work",
    traduzirPlacelHoder: "Your email",
    traducaoH2: "Check out some of our products",
    traduzirPExplicativo:
      "At Fylo, we believe in the potential of students from their first year of college. <br>With our innovative program, you will have the opportunity to immerse yourself in the world of <br> back end development from an early age.",
     traduirA: "Learn more about Fylo"
  };

  select.addEventListener("change", () => {
    const selecionarOption = select.options[select.selectedIndex].value;
    if (selecionarOption == "Ingles") {
      h1.innerHTML = traducaoIngles.traduzirH1;
      p[0].innerHTML = traducaoIngles.traduzirP;
      input.placeholder = traducaoIngles.traduzirPlacelHoder
      h2.innerHTML = traducaoIngles.traducaoH2
      p[2].innerHTML = traducaoIngles.traduzirPExplicativo
      a.innerHTML = `${traducaoIngles.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`
    }else{
      alert(`portugues`);
    }
  });
};

trocarIdioma();