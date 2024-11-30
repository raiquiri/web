import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initWoman from "../components/initWoman.js";
import initOffer from "../components/initOffer.js";
import initBlog from "../components/initBlog.js";
import initFarewell from "../components/initFarewell.js";
import initLaw from "../components/initLaw.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman_section"></section>
    <section class="section offer_section"></section>
    <section class="section blog_section"></section>
    <section class="section farewell_section"></section>
    <section class="section law_section"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  // иницилизация раздела с девушкой
  const womanNode = rootNode.querySelector(".woman_section");
  initWoman(womanNode);
  
  // иницилизация раздела с предложением
  const offerNode = rootNode.querySelector(".offer_section");
  initOffer(offerNode);
  
  // иницилизация раздела с блогом
  const blogNode = rootNode.querySelector(".blog_section");
  initBlog(blogNode);
  
  // иницилизация раздела с завершением/контактами
  const farewellNode = rootNode.querySelector(".farewell_section");
  initFarewell(farewellNode);

  // иницилизация раздела с правами
  const lawNode = rootNode.querySelector(".law_section");
  initLaw(lawNode);
};

export default homePage;
