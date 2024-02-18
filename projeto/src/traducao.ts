import { input } from "./main";

const h1 = document.querySelector("h1") as HTMLHeadingElement;
const p = document.querySelectorAll("p");
const h2 = document.querySelector("h2") as HTMLHeadingElement;
const a = document.querySelectorAll("a")[0] as HTMLAnchorElement;
const textoCeo = document.querySelector(".texto-ceo") as HTMLParagraphElement;
const span = document.getElementById("parafro") as HTMLParagraphElement
type traducaoIngles = {
  traduzirH1: string;
  traduzirP: string;
  traduzirPlacelHoder: string;
  traducaoH2: string;
  traduzirPExplicativo: string;
  traduirA: string;
  textoCeo: string;
  textoSpan: string;
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
  traduirA: "Learn more about Fylo",
  textoCeo:
    "Since 2008, we have been at the forefront of technology, always adapting to the demands of theever-changing market.",
    textoSpan: "Connect with us on social media:"
};

export const elementoEmIngles = () => {
  h1.innerHTML = traducaoIngles.traduzirH1;
  p[0].innerHTML = traducaoIngles.traduzirP;
  input.placeholder = traducaoIngles.traduzirPlacelHoder;
  h2.innerHTML = traducaoIngles.traducaoH2;
  p[2].innerHTML = traducaoIngles.traduzirPExplicativo;
  a.innerHTML = `${traducaoIngles.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`;
  textoCeo.innerHTML = traducaoIngles.textoCeo;
  span.innerHTML = traducaoIngles.textoSpan
};
