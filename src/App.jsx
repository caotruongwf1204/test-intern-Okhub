import Banner from "./component/banner";
import "./App.css";
import Navigation from "./component/navigation";
import CheerTour from "./component/cheers-tour";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "./component/slider";
import Footer from "./component/footer";
import Section from "./component/section";
import MenuMobile from "./component/menu-mobile";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <MenuMobile></MenuMobile>
      <Banner></Banner>
      <Slider></Slider>
      <CheerTour></CheerTour>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}
