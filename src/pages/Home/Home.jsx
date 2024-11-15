import React from "react";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import Bathroom from "../../components/Bathroom/Bathroom";
import Cards from "../../components/Cards/Cards";
import MultipleItemsSlider from "../../components/MultipleItemsSlider/MultipleItemsSlider";
import Slider from "./../../components/Slider/Slider";

const Anasayfa = () => {
  return (
    <div>
      <Slider />
      <Cards />
      <MultipleItemsSlider />
      <AboutComponent />
      <Bathroom />
      <AnimatedText />
    </div>
  );
};

export default Anasayfa;
