import { botaoVerificar, input } from "./main";

export const h1 = document.querySelector("h1") as HTMLHeadingElement;
const p = document.querySelectorAll("p");
const h2 = document.querySelector("h2") as HTMLHeadingElement;
const a = document.querySelectorAll("a")[0] as HTMLAnchorElement;
const textoCeo = document.querySelector(".texto-ceo") as HTMLParagraphElement;
const span = document.getElementById("parafro") as HTMLParagraphElement;
const perca = document.querySelector(".perca") as HTMLParagraphElement;
let li = document.querySelectorAll("li");
const textoExplicativo = document.querySelector(".textoExplicativo") as HTMLParagraphElement;
const textoSaber = document.getElementById("tetoSaber") as HTMLParagraphElement;
const h3 = document.querySelector("h3") as HTMLHeadingElement;


export const atualizarValoresEmIngles = () => {
  fetch("src/app.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      h1.innerHTML = data.en.traduzirH1;
      p[0].innerHTML = data.en.traduzirP;
      input.placeholder = data.en.traduzirPlacelHoder;
      h2.innerHTML = data.en.traducaoH2;
      textoExplicativo.innerHTML = data.en.traduzirPExplicativo;
      a.innerHTML = `${data.en.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`;
      textoCeo.innerHTML = data.en.textoCeo;
      span.innerHTML = data.en.textoSpan;
      perca.innerHTML = data.en.textoPerca;
      botaoVerificar.textContent = data.en.botaoEmail;
      li[0].textContent = data.en.liLinguage;
      li[1].textContent = data.en.liEquipe;
      li[2].textContent = data.en.liRegistro;
      textoSaber.innerHTML = data.en.textoSaberMais;
      h3.innerHTML = data.en.h3Idioma;
    })

    .catch((error) => {
      console.log("nao foi possivel carregar O idioma en", error);
    });
};

export const atualizarValoresEmPortugues = () => {
  fetch("src/app.json")
    .then((response) => response.json())
    .then((data) => {
      h1.innerHTML = data.pt.traduzirH1;
      p[0].innerHTML = data.pt.traduzirP;
      input.placeholder = data.pt.traduzirPlacelHoder;
      h2.innerHTML = data.pt.traducaoH2;
      textoExplicativo.innerHTML = data.pt.traduzirPExplicativo;
      a.innerHTML = `${data.pt.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`;
      textoCeo.innerHTML = data.pt.textoCeo;
      span.innerHTML = data.pt.textoSpan;
      perca.innerHTML = data.pt.textoPerca;
      li[0].textContent = data.pt.liLinguage;
      li[1].textContent = data.pt.liEquipe;
      li[2].textContent = data.pt.liRegistro;
      botaoVerificar.textContent = data.pt.botaoEmail;
      textoSaber.innerHTML = data.pt.textoSaberMais;
      h3.innerHTML = data.pt.h3Idioma;
    });
};
