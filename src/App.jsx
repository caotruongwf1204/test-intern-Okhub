import "./App.css";
import CheerTour from "./component/cheers/cheers-tour";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./component/footer/footer";
import Section from "./component/trip/section";
import Hotline from "./component/hotline";
import Navigation from "./component/navigation/navigation";
import Banner from "./component/banner/banner";
import Slider from "./component/slider/slider";
import Slide from "./component/slide/slide";
import ScrollToTopButton from "./component/btn-scroll";
import BtnNowScroll from "./component/btn-now-scroll";
import "./font.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hotline></Hotline>
      <BtnNowScroll></BtnNowScroll>
      <ScrollToTopButton></ScrollToTopButton>
      <Navigation></Navigation>
      <Banner></Banner>
      <Slider></Slider>
      <CheerTour></CheerTour>
      <Slide></Slide>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}
