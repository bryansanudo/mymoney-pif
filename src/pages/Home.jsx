import React from "react";
import Section from "@/components/common/Section";
import Footer from "@/components/home/Footer";
import Slider from "@/components/home/Slider";
import GetPublication from "@/components/home/GetPublication";
const Home = () => {
  return (
    <>
      <Section>
        <Slider />
      </Section>
      <Section title="Publicaciones">
        <GetPublication />
        <Footer />
      </Section>
    </>
  );
};

export default Home;
