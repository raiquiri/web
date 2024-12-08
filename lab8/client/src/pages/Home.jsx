import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman";
import Offer from "../components/Offer";
import Blog from "../components/Blog";
import Farewell from "../components/Farewell";
import Law from "../components/Law";

const Home = () => {
  return (
    <div>
      <section className="section header" id="header">
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section woman_section" id="woman">
        <Woman />
      </section>
      <section className="section offer_section" id="offer">
        <Offer />
      </section>
      <section className="section blog_section" id="blog">
        <Blog />
      </section>
      <section className="section farewell_section" id="farewell">
        <Farewell />
      </section>
      <section className="section law_section" id="law">
        <Law />
      </section>
    </div>
  );
};

export default Home;
