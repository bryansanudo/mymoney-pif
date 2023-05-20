import React from "react";
import Section from "@/components/common/Section";
import Footer from "@/components/home/Footer";
import Slider from "@/components/home/Slider";
import GetPublication from "@/components/home/GetPublication";
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
        <GetPublication />
        <Footer />
      </Section>
    </>
  );
};

export default Home;
