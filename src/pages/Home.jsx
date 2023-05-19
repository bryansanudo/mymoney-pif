import React from "react";
import Section from "@/components/common/Section";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
const Home = () => {
  return (
    <>
      <Section
        name="seccion 1"
        title="seccion 1"
        subtitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae dolore dolor nam aliquam cumque repellendus necessitatibus maiores minima repellat quam reiciendis facere voluptates sed beatae, et omnis consectetur deserunt."
      >
        <Slider />
      </Section>
      <Section
        name="seccion 2"
        title="seccion 2"
        subtitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae dolore dolor nam aliquam cumque repellendus necessitatibus maiores minima repellat quam reiciendis facere voluptates sed beatae, et omnis consectetur deserunt."
      >
        <div className="container bg-gray-400 h-[400px]">lorem ispum 2</div>
      </Section>
      <Section
        name="seccion 3"
        title="seccion 3"
        subtitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae dolore dolor nam aliquam cumque repellendus necessitatibus maiores minima repellat quam reiciendis facere voluptates sed beatae, et omnis consectetur deserunt."
      >
        <div className="container bg-gray-400 h-[400px]">lorem ispum 3</div>
        <Footer />
      </Section>
    </>
  );
};

export default Home;
