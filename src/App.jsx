import Banner from "./component/banner";
import "./App.css";
import Navigation from "./component/navigation";
import CheerTour from "./component/cheers-tour";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Banner></Banner>
      <Navigation></Navigation>
      <CheerTour></CheerTour>
    </>
  );
}
