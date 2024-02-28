import "../css/banner.css";
import LogoMobile from "./logo-mobile";
import Service from "./service";
import ServiceMobile from "./service-mobile";

export default function Banner() {
  return (
    <div className="relative flex justify-center">
      <LogoMobile></LogoMobile>
      <div className="banner-img">
        <img src="/images/banner.png" alt="banner" />
      </div>
      <div className="banner-text flex absolute">
        <p className="back-to">BACK to</p>
        <p className="nature justify-end">NATUTE</p>
      </div>
      <Service></Service>
      <ServiceMobile></ServiceMobile>
    </div>
  );
}
