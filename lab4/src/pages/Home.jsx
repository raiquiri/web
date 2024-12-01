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
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman_section">
        <Woman/>
      </section>
      <section className="section offer_section">
        <Offer/>
      </section>
      <section className="section blog_section">
        <Blog/>
      </section>
      <section className="section farewell_section">
        <Farewell/>
      </section>
      <section className="section law_section">
        <Law/>
      </section>
    </>
  );
};

export default Home;
