import React from "react";
import Hero from "../Components/Home/Hero";
import Market from "../Components/Home/Market";

const Home: React.FC = () => {
  return (
    <section>
      <div>
        <Hero />
        <Market />
      </div>
    </section>
  );
};

export default Home;
