import "../css/navigation.css";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./logo";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navigation-main absolute top-6 flex items-center justify-center w-full ${
        isScrolled ? "show" : ""
      }`}
    >
      <div className="container flex items-center justify-center">
        <div className="navigation flex items-center justify-between">
          <div className="nav-logo">
            <div>
              <Logo></Logo>
            </div>
          </div>
          <div className="nav-bar">
            <ul className="flex items-center justify-between">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li className="flex items-center justify-center gap-1">
                TOUR{" "}
                <IoIosArrowDown
                  style={{ width: "16px", height: "16px", fontWeight: "700" }}
                />
              </li>
              <li>DESTINATIONS</li>
              <li>BLOG</li>
              <li>FAQ</li>
              <li>CONTACT</li>
              <li>VIETNAM CHEERS HOSTEL</li>
            </ul>
          </div>
          <div className="nav-icon flex gap-2">
            <div className="icon-fb">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.13242 13.2214H4.79912V7.88142H7.20185L7.46578 5.22787H4.79912V3.88802C4.79912 3.51983 5.09758 3.22135 5.46578 3.22135H7.46578V0.554688H5.46578C3.62478 0.554688 2.13242 2.04707 2.13242 3.88802V5.22787H0.799083L0.535156 7.88142H2.13242V13.2214Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="icon-ytb">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00075 9.56399H6.98741C6.94608 9.56399 2.81075 9.55599 1.76741 9.27266C1.1937 9.11812 0.745647 8.66979 0.591414 8.09599C0.4038 7.03759 0.313207 5.96419 0.320747 4.88932C0.3159 3.81266 0.408954 2.7378 0.598747 1.67799C0.757221 1.10366 1.2033 0.65329 1.77608 0.489323C2.79075 0.222656 6.81208 0.222656 6.98275 0.222656H6.99675C7.03875 0.222656 11.1847 0.230656 12.2174 0.513989C12.7899 0.669329 13.2371 1.11672 13.3921 1.68932C13.5857 2.75168 13.6765 3.83019 13.6634 4.90999C13.6681 5.98532 13.5748 7.05886 13.3847 8.11732C13.2285 8.69039 12.7802 9.13772 12.2067 9.29266C11.1934 9.56132 7.17141 9.56399 7.00075 9.56399ZM5.66741 2.89266L5.66408 6.89266L9.13875 4.89266L5.66741 2.89266Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
