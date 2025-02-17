import React from "react";
import Hero from "../Components/Home/Hero";
import Market from "../Components/Home/Market";
import Contact from "../Components/Home/Contact";

const Home: React.FC = () => {
  return (
    <section>
      <div>
        <Hero />
        <Market />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
