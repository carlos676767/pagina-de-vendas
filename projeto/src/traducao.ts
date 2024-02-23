import { input } from "./main";

const h1 = document.querySelector("h1") as HTMLHeadingElement;
const p = document.querySelectorAll("p");
const h2 = document.querySelector("h2") as HTMLHeadingElement;
const a = document.querySelectorAll("a")[0] as HTMLAnchorElement;
const textoCeo = document.querySelector(".texto-ceo") as HTMLParagraphElement;
const span = document.getElementById("parafro") as HTMLParagraphElement;
const perca = document.querySelector(".perca") as HTMLParagraphElement;
interface htmlLanguage {
  traduzirH1: string;
  traduzirP: string;
  traduzirPlacelHoder: string;
  traducaoH2: string;
  traduzirPExplicativo: string;
  traduirA: string;
  textoCeo: string;
  textoSpan: string;
  textoPerca: string;
};

const traducaoIngles: htmlLanguage = {
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
  textoSpan: "Connect with us on social media:",
  textoPerca:
    "Don't miss your chance with Fylo! Join a innovative team passionate about exciting projectsTake advantage of opportunities for learning and personal growth. Be part of this successful journey!",
};

const traducaoPortugues: htmlLanguage = {
  traduzirH1:
  "Construa uma carreira de <br>sucesso conheça já nossos <br> serviços",
traduzirP:
  "Com o Fylo, você consegue um emprego como desenvolvedor <br> de uma maneira fácil. Venha já e confira nosso trabalho.",
traduzirPlacelHoder: "Digite seu email.",
traducaoH2: "Confira Um pouco de nossos produtos",
traduzirPExplicativo:
  "Na Fylo, acreditamos no potencial dos estudantes desde o primeiro ano de faculdade. <br>Com nosso programa inovador, você terá a oportunidade de mergulhar no mundo do <br> desenvolvimento back end desde cedo.",
traduirA: "Conheça mais sobre a Fylo",
textoCeo:
  "Desde 2008, estamos na vanguarda da tecnologia, sempre nos adaptando às demandas do mercado em constante mudança.",
textoSpan: "Conecte-se conosco nas redes sociais:",
textoPerca: "Não perca a chance com a Fylo! Junte-se a umaequipe inovadora e apaixonada por projeto emocionantesAproveite as oportunidades de aprendizado e crescimento pessoal.Seja parte dessa jornada de sucesso!"
}

export const atualizarValoresEmIngles = () => {
  h1.innerHTML = traducaoIngles.traduzirH1;
  p[0].innerHTML = traducaoIngles.traduzirP;
  input.placeholder = traducaoIngles.traduzirPlacelHoder;
  h2.innerHTML = traducaoIngles.traducaoH2;
  p[2].innerHTML = traducaoIngles.traduzirPExplicativo;
  a.innerHTML = `${traducaoIngles.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`;
  textoCeo.innerHTML = traducaoIngles.textoCeo;
  span.innerHTML = traducaoIngles.textoSpan;
  perca.innerHTML = traducaoIngles.textoPerca;
};

export const atualizarValoresEmPortugues = () => {
  h1.innerHTML = traducaoPortugues.traduzirH1;
  p[0].innerHTML = traducaoPortugues.traduzirP;
  input.placeholder = traducaoPortugues.traduzirPlacelHoder;
  h2.innerHTML = traducaoPortugues.traducaoH2;
  p[2].innerHTML = traducaoPortugues.traduzirPExplicativo;
  a.innerHTML = `${traducaoPortugues.traduirA}<img src="public/images/icon-arrow.svg" alt="fylo">`;
  textoCeo.innerHTML = traducaoPortugues.textoCeo;
  span.innerHTML = traducaoPortugues.textoSpan;
  perca.innerHTML = traducaoPortugues.textoPerca;
};


const dadosTraducao = JSON.stringify(traducaoIngles);
const recuperandoString = localStorage.getItem("dadosSalvo");
localStorage.setItem("dadosSalvo", dadosTraducao);



export const salvarIdiomaIngles = () => {
  if (recuperandoString) {
    atualizarValoresEmIngles();
  }
};
