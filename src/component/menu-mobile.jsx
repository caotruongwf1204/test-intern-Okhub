import React, { useState } from "react";
import "../css/menu-mobile.css";
import NavMobile from "./nav-mobile";



export default function MenuMobile() {
    const [isActive, setIsActive] = useState(false);

  const toggleNavMobile = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="menu-mobile">
        <div className="mobile-main flex justify-center">
          <div className="container flex items-center justify-between px-[20px]">
            <div className="home">
              <svg
                width="52"
                height="32"
                viewBox="0 0 52 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_667_1511)">
                  <path
                    d="M32.8156 5.65133L30.8197 3.96908V1.58103C30.8197 1.52238 30.8083 1.46429 30.7859 1.41008C30.7635 1.35588 30.7306 1.30662 30.6892 1.26512C30.6477 1.22362 30.5985 1.1907 30.5444 1.16824C30.4902 1.14578 30.4321 1.13421 30.3735 1.13421H28.959C28.9003 1.13414 28.8422 1.14564 28.788 1.16807C28.7337 1.1905 28.6844 1.22341 28.6429 1.26491C28.6014 1.30642 28.5685 1.3557 28.5461 1.40995C28.5237 1.46419 28.5122 1.52233 28.5122 1.58103V2.02376L26.3891 0.234173C26.2831 0.134257 26.1429 0.0786133 25.9972 0.0786133C25.8515 0.0786133 25.7113 0.134257 25.6052 0.234173L19.1845 5.65133C19.0996 5.73042 19.0404 5.83326 19.0147 5.94645C18.989 6.05964 18.998 6.17795 19.0405 6.28597C19.0832 6.39332 19.1572 6.48536 19.2529 6.55015C19.3486 6.61495 19.4615 6.64951 19.5771 6.64937H20.5056V13.3469C20.5056 13.6636 20.7652 13.9238 21.0831 13.9238H30.9171C31.0701 13.9235 31.2168 13.8625 31.3251 13.7543C31.4333 13.6461 31.4942 13.4994 31.4945 13.3463V6.64995H32.4231C32.5394 6.65012 32.6531 6.61489 32.7489 6.54894C32.8448 6.48299 32.9183 6.38944 32.9597 6.28072C33.0018 6.17359 33.0105 6.05625 32.9848 5.94405C32.9591 5.83186 32.9002 5.72946 32.8156 5.65133ZM26.4358 11.8262C26.3776 11.9054 26.3016 11.9698 26.2139 12.0142C26.1262 12.0586 26.0293 12.0817 25.931 12.0817C25.8327 12.0817 25.7358 12.0586 25.6481 12.0142C25.5604 11.9698 25.4843 11.9054 25.4261 11.8262C24.63 10.7302 23.1648 8.57253 23.1648 7.46541C23.166 6.7319 23.4583 6.02887 23.9774 5.51069C24.4966 4.99251 25.2001 4.70156 25.9336 4.70171C26.6671 4.70156 27.3706 4.99251 27.8897 5.51069C28.4089 6.02887 28.7012 6.7319 28.7024 7.46541C28.7024 8.57253 27.2372 10.7302 26.4358 11.8262Z"
                    fill="#B34B1E"
                  />
                  <path
                    d="M26 9.02344C26.9665 9.02344 27.7499 8.23994 27.7499 7.27344C27.7499 6.30694 26.9665 5.52344 26 5.52344C25.0336 5.52344 24.2501 6.30694 24.2501 7.27344C24.2501 8.23994 25.0336 9.02344 26 9.02344Z"
                    fill="#B34B1E"
                  />
                </g>
                <path
                  d="M17.3049 21.05V28H16.1649V24.96H12.8949V28H11.7549V21.05H12.8949V24.03H16.1649V21.05H17.3049ZM21.1957 28.09C20.6757 28.09 20.2057 27.9733 19.7857 27.74C19.3657 27.5 19.0357 27.1667 18.7957 26.74C18.5557 26.3067 18.4357 25.8067 18.4357 25.24C18.4357 24.68 18.559 24.1833 18.8057 23.75C19.0523 23.3167 19.389 22.9833 19.8157 22.75C20.2423 22.5167 20.719 22.4 21.2457 22.4C21.7723 22.4 22.249 22.5167 22.6757 22.75C23.1023 22.9833 23.439 23.3167 23.6857 23.75C23.9323 24.1833 24.0557 24.68 24.0557 25.24C24.0557 25.8 23.929 26.2967 23.6757 26.73C23.4223 27.1633 23.0757 27.5 22.6357 27.74C22.2023 27.9733 21.7223 28.09 21.1957 28.09ZM21.1957 27.1C21.489 27.1 21.7623 27.03 22.0157 26.89C22.2757 26.75 22.4857 26.54 22.6457 26.26C22.8057 25.98 22.8857 25.64 22.8857 25.24C22.8857 24.84 22.809 24.5033 22.6557 24.23C22.5023 23.95 22.299 23.74 22.0457 23.6C21.7923 23.46 21.519 23.39 21.2257 23.39C20.9323 23.39 20.659 23.46 20.4057 23.6C20.159 23.74 19.9623 23.95 19.8157 24.23C19.669 24.5033 19.5957 24.84 19.5957 25.24C19.5957 25.8333 19.7457 26.2933 20.0457 26.62C20.3523 26.94 20.7357 27.1 21.1957 27.1ZM31.8526 22.4C32.286 22.4 32.6726 22.49 33.0126 22.67C33.3593 22.85 33.6293 23.1167 33.8226 23.47C34.0226 23.8233 34.1226 24.25 34.1226 24.75V28H32.9926V24.92C32.9926 24.4267 32.8693 24.05 32.6226 23.79C32.376 23.5233 32.0393 23.39 31.6126 23.39C31.186 23.39 30.846 23.5233 30.5926 23.79C30.346 24.05 30.2226 24.4267 30.2226 24.92V28H29.0926V24.92C29.0926 24.4267 28.9693 24.05 28.7226 23.79C28.476 23.5233 28.1393 23.39 27.7126 23.39C27.286 23.39 26.946 23.5233 26.6926 23.79C26.446 24.05 26.3226 24.4267 26.3226 24.92V28H25.1826V22.49H26.3226V23.12C26.5093 22.8933 26.746 22.7167 27.0326 22.59C27.3193 22.4633 27.626 22.4 27.9526 22.4C28.3926 22.4 28.786 22.4933 29.1326 22.68C29.4793 22.8667 29.746 23.1367 29.9326 23.49C30.0993 23.1567 30.3593 22.8933 30.7126 22.7C31.066 22.5 31.446 22.4 31.8526 22.4ZM40.6232 25.11C40.6232 25.3167 40.6099 25.5033 40.5832 25.67H36.3732C36.4066 26.11 36.5699 26.4633 36.8632 26.73C37.1566 26.9967 37.5166 27.13 37.9432 27.13C38.5566 27.13 38.9899 26.8733 39.2432 26.36H40.4732C40.3066 26.8667 40.0032 27.2833 39.5632 27.61C39.1299 27.93 38.5899 28.09 37.9432 28.09C37.4166 28.09 36.9432 27.9733 36.5232 27.74C36.1099 27.5 35.7832 27.1667 35.5432 26.74C35.3099 26.3067 35.1932 25.8067 35.1932 25.24C35.1932 24.6733 35.3066 24.1767 35.5332 23.75C35.7666 23.3167 36.0899 22.9833 36.5032 22.75C36.9232 22.5167 37.4032 22.4 37.9432 22.4C38.4632 22.4 38.9266 22.5133 39.3332 22.74C39.7399 22.9667 40.0566 23.2867 40.2832 23.7C40.5099 24.1067 40.6232 24.5767 40.6232 25.11ZM39.4332 24.75C39.4266 24.33 39.2766 23.9933 38.9832 23.74C38.6899 23.4867 38.3266 23.36 37.8932 23.36C37.4999 23.36 37.1632 23.4867 36.8832 23.74C36.6032 23.9867 36.4366 24.3233 36.3832 24.75H39.4332Z"
                  fill="#B34B1E"
                />
                <defs>
                  <clipPath id="clip0_667_1511">
                    <rect
                      width="13.9992"
                      height="14"
                      fill="white"
                      transform="translate(19.0004)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="tour">
              <svg
                width="53"
                height="32"
                viewBox="0 0 53 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_667_1517)">
                  <path
                    d="M31.2888 7C29.9353 7 28.828 8.10739 28.828 9.46094C28.828 10.8145 29.9353 11.9219 31.2888 11.9219C32.6423 11.9219 33.7496 10.8145 33.7496 9.46094C33.7496 8.10739 32.6423 7 31.2888 7ZM31.2888 11.1016C30.3865 11.1016 29.6483 10.3633 29.6483 9.46094C29.6483 8.55862 30.3865 7.82031 31.2888 7.82031C32.1911 7.82031 32.9293 8.55862 32.9293 9.46094C32.9293 10.3633 32.1911 11.1016 31.2888 11.1016Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M22.2112 7C20.8577 7 19.7504 8.10739 19.7504 9.46094C19.7504 10.8145 20.8577 11.9219 22.2112 11.9219C23.5646 11.9219 24.672 10.8145 24.672 9.46094C24.672 8.10739 23.5646 7 22.2112 7ZM22.2112 11.1016C21.3089 11.1016 20.5706 10.3633 20.5706 9.46094C20.5706 8.55862 21.3089 7.82031 22.2112 7.82031C23.1134 7.82031 23.8517 8.55862 23.8517 9.46094C23.8517 10.3633 23.1134 11.1016 22.2112 11.1016Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M23.0315 4.53906H27.1875V7H23.0315V4.53906ZM29.2382 2.89844H28.4179C28.1912 2.89844 28.0078 2.71499 28.0078 2.48828C28.0078 2.26157 28.1912 2.07812 28.4179 2.07812H29.2382C29.4649 2.07812 29.6483 2.26157 29.6483 2.48828C29.6483 2.71499 29.4649 2.89844 29.2382 2.89844Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M31.5185 9.80389C31.4446 9.8449 31.3708 9.86954 31.2888 9.86954C31.1575 9.86954 31.0263 9.80389 30.9443 9.6891L29.0248 6.818C28.8936 6.6293 28.951 6.37501 29.1315 6.24378C29.3201 6.12071 29.5744 6.16993 29.7056 6.3586L31.2888 8.71295L31.6332 9.22969C31.7563 9.41837 31.7071 9.67266 31.5185 9.80389ZM26.7773 8.63907V10.2797H22.2111C21.76 10.2797 21.3909 9.91055 21.3909 9.45938C21.3909 9.00821 21.76 8.63907 22.2111 8.63907H26.7773Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M29.2381 2.07812C29.0084 2.07812 28.828 2.25857 28.828 2.48828V3.71875H27.5976C27.4582 3.71875 27.3351 3.7844 27.2531 3.89919L25.7082 6.17969H24.4833L23.1791 4.22734C22.9658 3.90742 22.6131 3.71875 22.2276 3.71875H20.1605C19.9308 3.71875 19.7504 3.89919 19.7504 4.12891C19.7504 5.17893 20.546 6.05661 21.5713 6.16325L22.8838 8.13203C23.0971 8.45195 23.4498 8.64062 23.8353 8.64062H24.8278L25.1094 9.15742L25.3555 9.64958C25.5524 10.0352 25.9461 10.2812 26.3891 10.2812H26.9906C27.5401 10.2812 28.0077 9.89573 28.1144 9.3543L28.18 9.06721C28.5081 7.39372 29.9927 6.17969 31.6989 6.17969C31.9286 6.17969 32.1091 5.99925 32.1091 5.76953V4.94922C32.1091 3.36602 30.8212 2.07812 29.2381 2.07812Z"
                    fill="#284A0C"
                  />
                </g>
                <path
                  d="M20.8132 21.05V21.98H18.9632V28H17.8232V21.98H15.9632V21.05H20.8132ZM24.3578 28.09C23.8378 28.09 23.3678 27.9733 22.9478 27.74C22.5278 27.5 22.1978 27.1667 21.9578 26.74C21.7178 26.3067 21.5978 25.8067 21.5978 25.24C21.5978 24.68 21.7211 24.1833 21.9678 23.75C22.2144 23.3167 22.5511 22.9833 22.9778 22.75C23.4044 22.5167 23.8811 22.4 24.4078 22.4C24.9344 22.4 25.4111 22.5167 25.8378 22.75C26.2644 22.9833 26.6011 23.3167 26.8478 23.75C27.0944 24.1833 27.2178 24.68 27.2178 25.24C27.2178 25.8 27.0911 26.2967 26.8378 26.73C26.5844 27.1633 26.2378 27.5 25.7978 27.74C25.3644 27.9733 24.8844 28.09 24.3578 28.09ZM24.3578 27.1C24.6511 27.1 24.9244 27.03 25.1778 26.89C25.4378 26.75 25.6478 26.54 25.8078 26.26C25.9678 25.98 26.0478 25.64 26.0478 25.24C26.0478 24.84 25.9711 24.5033 25.8178 24.23C25.6644 23.95 25.4611 23.74 25.2078 23.6C24.9544 23.46 24.6811 23.39 24.3878 23.39C24.0944 23.39 23.8211 23.46 23.5678 23.6C23.3211 23.74 23.1244 23.95 22.9778 24.23C22.8311 24.5033 22.7578 24.84 22.7578 25.24C22.7578 25.8333 22.9078 26.2933 23.2078 26.62C23.5144 26.94 23.8978 27.1 24.3578 27.1ZM33.3347 22.49V28H32.1947V27.35C32.0147 27.5767 31.7781 27.7567 31.4847 27.89C31.1981 28.0167 30.8914 28.08 30.5647 28.08C30.1314 28.08 29.7414 27.99 29.3947 27.81C29.0547 27.63 28.7847 27.3633 28.5847 27.01C28.3914 26.6567 28.2947 26.23 28.2947 25.73V22.49H29.4247V25.56C29.4247 26.0533 29.5481 26.4333 29.7947 26.7C30.0414 26.96 30.3781 27.09 30.8047 27.09C31.2314 27.09 31.5681 26.96 31.8147 26.7C32.0681 26.4333 32.1947 26.0533 32.1947 25.56V22.49H33.3347ZM35.9789 23.29C36.1455 23.01 36.3655 22.7933 36.6389 22.64C36.9189 22.48 37.2489 22.4 37.6289 22.4V23.58H37.3389C36.8922 23.58 36.5522 23.6933 36.3189 23.92C36.0922 24.1467 35.9789 24.54 35.9789 25.1V28H34.8389V22.49H35.9789V23.29Z"
                  fill="#284A0C"
                />
                <defs>
                  <clipPath id="clip0_667_1517">
                    <rect
                      width="13.9992"
                      height="14"
                      fill="white"
                      transform="translate(19.7504)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="whatapp">
              <svg
                width="53"
                height="32"
                viewBox="0 0 53 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7777 13.6722L20.61 10.623C20.0978 9.7313 19.8272 8.71684 19.8272 7.68191C19.8272 4.43681 22.4578 1.79688 25.6849 1.79688C27.2533 1.79688 28.7229 2.41081 29.8286 3.52175C30.9344 4.63269 31.5426 6.11198 31.5426 7.68484C31.5426 10.9299 28.912 13.5699 25.6849 13.5699H25.682C24.7013 13.5699 23.7381 13.3214 22.8826 12.8536L19.7777 13.6722Z"
                  fill="#284A0C"
                />
                <path
                  d="M19.5668 13.8854L20.4281 10.728C19.8985 9.80418 19.6162 8.75464 19.6192 7.68171C19.6192 4.31967 22.3429 1.58618 25.6893 1.58618C27.313 1.58618 28.8378 2.22058 29.9814 3.37245C31.1279 4.52432 31.7594 6.05624 31.7565 7.68464C31.7565 11.0467 29.0328 13.7802 25.6864 13.7802H25.6835C24.6679 13.7802 23.6698 13.5229 22.7823 13.0376L19.5668 13.8854ZM22.9336 11.9325L23.1169 12.0436C23.8909 12.5055 24.7785 12.7482 25.6835 12.7511H25.6864C28.4654 12.7511 30.7293 10.4795 30.7293 7.68464C30.7293 6.33105 30.2055 5.05932 29.2539 4.10041C28.3024 3.14149 27.0337 2.61526 25.6864 2.61526C22.9045 2.61526 20.6405 4.88683 20.6405 7.68171C20.6405 8.6377 20.9053 9.5703 21.4117 10.3772L21.531 10.5701L21.0217 12.4383L22.9336 11.9325Z"
                  fill="white"
                />
                <path
                  d="M24.1714 5.12929C24.0579 4.87497 23.9386 4.86913 23.8309 4.8662C23.7436 4.86328 23.6418 4.86328 23.5399 4.86328C23.4381 4.86328 23.2751 4.90128 23.1354 5.05329C22.9958 5.20529 22.6058 5.57362 22.6058 6.32488C22.6058 7.07322 23.15 7.79817 23.2257 7.90048C23.3013 8.00279 24.2761 9.59008 25.8155 10.201C27.0959 10.7097 27.3578 10.6074 27.6342 10.581C27.9136 10.5547 28.5305 10.2127 28.6585 9.85609C28.7836 9.49946 28.7836 9.19545 28.7458 9.13114C28.708 9.06683 28.6061 9.02883 28.4548 8.95283C28.3035 8.87683 27.5585 8.5085 27.4189 8.45589C27.2792 8.40327 27.1773 8.37988 27.0784 8.53189C26.9766 8.68389 26.6856 9.02591 26.5983 9.12822C26.511 9.23053 26.4208 9.24222 26.2694 9.16622C26.1181 9.09022 25.6293 8.92944 25.0502 8.40911C24.5991 8.00571 24.2936 7.50585 24.2063 7.35384C24.119 7.20184 24.1976 7.11999 24.2732 7.04398C24.3402 6.97675 24.4245 6.86567 24.5002 6.77797C24.5759 6.69028 24.6021 6.62597 24.6515 6.52365C24.701 6.42134 24.6777 6.33365 24.6399 6.25764C24.6021 6.18164 24.3052 5.43038 24.1714 5.12929Z"
                  fill="white"
                />
                <ellipse
                  cx="31.6487"
                  cy="1.85988"
                  rx="1.85144"
                  ry="1.85988"
                  fill="#284A0C"
                />
                <path
                  d="M9.87422 21.05L7.81422 28H6.52422L5.06422 22.74L3.51422 28L2.23422 28.01L0.264219 21.05H1.47422L2.91422 26.71L4.47422 21.05H5.75422L7.20422 26.68L8.65422 21.05H9.87422ZM13.6645 22.4C14.0845 22.4 14.4578 22.49 14.7845 22.67C15.1178 22.85 15.3778 23.1167 15.5645 23.47C15.7578 23.8233 15.8545 24.25 15.8545 24.75V28H14.7245V24.92C14.7245 24.4267 14.6011 24.05 14.3545 23.79C14.1078 23.5233 13.7711 23.39 13.3445 23.39C12.9178 23.39 12.5778 23.5233 12.3245 23.79C12.0778 24.05 11.9545 24.4267 11.9545 24.92V28H10.8145V20.6H11.9545V23.13C12.1478 22.8967 12.3911 22.7167 12.6845 22.59C12.9845 22.4633 13.3111 22.4 13.6645 22.4ZM16.9286 25.22C16.9286 24.6667 17.0419 24.1767 17.2686 23.75C17.5019 23.3233 17.8153 22.9933 18.2086 22.76C18.6086 22.52 19.0486 22.4 19.5286 22.4C19.9619 22.4 20.3386 22.4867 20.6586 22.66C20.9853 22.8267 21.2453 23.0367 21.4386 23.29V22.49H22.5886V28H21.4386V27.18C21.2453 27.44 20.9819 27.6567 20.6486 27.83C20.3153 28.0033 19.9353 28.09 19.5086 28.09C19.0353 28.09 18.6019 27.97 18.2086 27.73C17.8153 27.4833 17.5019 27.1433 17.2686 26.71C17.0419 26.27 16.9286 25.7733 16.9286 25.22ZM21.4386 25.24C21.4386 24.86 21.3586 24.53 21.1986 24.25C21.0453 23.97 20.8419 23.7567 20.5886 23.61C20.3353 23.4633 20.0619 23.39 19.7686 23.39C19.4753 23.39 19.2019 23.4633 18.9486 23.61C18.6953 23.75 18.4886 23.96 18.3286 24.24C18.1753 24.5133 18.0986 24.84 18.0986 25.22C18.0986 25.6 18.1753 25.9333 18.3286 26.22C18.4886 26.5067 18.6953 26.7267 18.9486 26.88C19.2086 27.0267 19.4819 27.1 19.7686 27.1C20.0619 27.1 20.3353 27.0267 20.5886 26.88C20.8419 26.7333 21.0453 26.52 21.1986 26.24C21.3586 25.9533 21.4386 25.62 21.4386 25.24ZM25.4159 23.42V26.47C25.4159 26.6767 25.4626 26.8267 25.5559 26.92C25.6559 27.0067 25.8226 27.05 26.0559 27.05H26.7559V28H25.8559C25.3426 28 24.9493 27.88 24.6759 27.64C24.4026 27.4 24.2659 27.01 24.2659 26.47V23.42H23.6159V22.49H24.2659V21.12H25.4159V22.49H26.7559V23.42H25.4159ZM29.8066 28.09C29.3733 28.09 28.9833 28.0133 28.6366 27.86C28.2966 27.7 28.0266 27.4867 27.8266 27.22C27.6266 26.9467 27.52 26.6433 27.5066 26.31H28.6866C28.7066 26.5433 28.8166 26.74 29.0166 26.9C29.2233 27.0533 29.48 27.13 29.7866 27.13C30.1066 27.13 30.3533 27.07 30.5266 26.95C30.7066 26.8233 30.7966 26.6633 30.7966 26.47C30.7966 26.2633 30.6966 26.11 30.4966 26.01C30.3033 25.91 29.9933 25.8 29.5666 25.68C29.1533 25.5667 28.8166 25.4567 28.5566 25.35C28.2966 25.2433 28.07 25.08 27.8766 24.86C27.69 24.64 27.5966 24.35 27.5966 23.99C27.5966 23.6967 27.6833 23.43 27.8566 23.19C28.03 22.9433 28.2766 22.75 28.5966 22.61C28.9233 22.47 29.2966 22.4 29.7166 22.4C30.3433 22.4 30.8466 22.56 31.2266 22.88C31.6133 23.1933 31.82 23.6233 31.8466 24.17H30.7066C30.6866 23.9233 30.5866 23.7267 30.4066 23.58C30.2266 23.4333 29.9833 23.36 29.6766 23.36C29.3766 23.36 29.1466 23.4167 28.9866 23.53C28.8266 23.6433 28.7466 23.7933 28.7466 23.98C28.7466 24.1267 28.8 24.25 28.9066 24.35C29.0133 24.45 29.1433 24.53 29.2966 24.59C29.45 24.6433 29.6766 24.7133 29.9766 24.8C30.3766 24.9067 30.7033 25.0167 30.9566 25.13C31.2166 25.2367 31.44 25.3967 31.6266 25.61C31.8133 25.8233 31.91 26.1067 31.9166 26.46C31.9166 26.7733 31.83 27.0533 31.6566 27.3C31.4833 27.5467 31.2366 27.74 30.9166 27.88C30.6033 28.02 30.2333 28.09 29.8066 28.09ZM37.3384 26.58H34.4284L33.9284 28H32.7384L35.2284 21.04H36.5484L39.0384 28H37.8384L37.3384 26.58ZM37.0184 25.65L35.8884 22.42L34.7484 25.65H37.0184ZM41.2611 23.3C41.4544 23.0467 41.7178 22.8333 42.0511 22.66C42.3844 22.4867 42.7611 22.4 43.1811 22.4C43.6611 22.4 44.0978 22.52 44.4911 22.76C44.8911 22.9933 45.2044 23.3233 45.4311 23.75C45.6578 24.1767 45.7711 24.6667 45.7711 25.22C45.7711 25.7733 45.6578 26.27 45.4311 26.71C45.2044 27.1433 44.8911 27.4833 44.4911 27.73C44.0978 27.97 43.6611 28.09 43.1811 28.09C42.7611 28.09 42.3878 28.0067 42.0611 27.84C41.7344 27.6667 41.4678 27.4533 41.2611 27.2V30.62H40.1211V22.49H41.2611V23.3ZM44.6111 25.22C44.6111 24.84 44.5311 24.5133 44.3711 24.24C44.2178 23.96 44.0111 23.75 43.7511 23.61C43.4978 23.4633 43.2244 23.39 42.9311 23.39C42.6444 23.39 42.3711 23.4633 42.1111 23.61C41.8578 23.7567 41.6511 23.97 41.4911 24.25C41.3378 24.53 41.2611 24.86 41.2611 25.24C41.2611 25.62 41.3378 25.9533 41.4911 26.24C41.6511 26.52 41.8578 26.7333 42.1111 26.88C42.3711 27.0267 42.6444 27.1 42.9311 27.1C43.2244 27.1 43.4978 27.0267 43.7511 26.88C44.0111 26.7267 44.2178 26.5067 44.3711 26.22C44.5311 25.9333 44.6111 25.6 44.6111 25.22ZM48.0384 23.3C48.2318 23.0467 48.4951 22.8333 48.8284 22.66C49.1618 22.4867 49.5384 22.4 49.9584 22.4C50.4384 22.4 50.8751 22.52 51.2684 22.76C51.6684 22.9933 51.9818 23.3233 52.2084 23.75C52.4351 24.1767 52.5484 24.6667 52.5484 25.22C52.5484 25.7733 52.4351 26.27 52.2084 26.71C51.9818 27.1433 51.6684 27.4833 51.2684 27.73C50.8751 27.97 50.4384 28.09 49.9584 28.09C49.5384 28.09 49.1651 28.0067 48.8384 27.84C48.5118 27.6667 48.2451 27.4533 48.0384 27.2V30.62H46.8984V22.49H48.0384V23.3ZM51.3884 25.22C51.3884 24.84 51.3084 24.5133 51.1484 24.24C50.9951 23.96 50.7884 23.75 50.5284 23.61C50.2751 23.4633 50.0018 23.39 49.7084 23.39C49.4218 23.39 49.1484 23.4633 48.8884 23.61C48.6351 23.7567 48.4284 23.97 48.2684 24.25C48.1151 24.53 48.0384 24.86 48.0384 25.24C48.0384 25.62 48.1151 25.9533 48.2684 26.24C48.4284 26.52 48.6351 26.7333 48.8884 26.88C49.1484 27.0267 49.4218 27.1 49.7084 27.1C50.0018 27.1 50.2751 27.0267 50.5284 26.88C50.7884 26.7267 50.9951 26.5067 51.1484 26.22C51.3084 25.9333 51.3884 25.6 51.3884 25.22Z"
                  fill="#284A0C"
                />
              </svg>
            </div>
            <div className="book-now-mobile">
              <svg
                width="53"
                height="32"
                viewBox="0 0 53 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_667_1536)">
                  <path
                    d="M27.4199 8.57827C27.0716 8.81047 26.6671 8.93322 26.25 8.93322C25.8329 8.93322 25.4283 8.81047 25.0801 8.57827L19.3436 4.75362C19.3119 4.73244 19.2808 4.7104 19.2504 4.68753V10.9546C19.2504 11.6732 19.8334 12.2434 20.5391 12.2434H31.9608C32.6793 12.2434 33.2496 11.6603 33.2496 10.9546V4.6875C33.2191 4.71044 33.1879 4.73252 33.1562 4.75373L27.4199 8.57827Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M19.7986 4.07088L25.5351 7.89556C25.7522 8.04034 26.0011 8.11272 26.25 8.11272C26.4988 8.11272 26.7477 8.04031 26.9649 7.89556L32.7014 4.07088C33.0447 3.84214 33.2496 3.45933 33.2496 3.04617C33.2496 2.33575 32.6717 1.75781 31.9613 1.75781H20.5387C19.8283 1.75784 19.2504 2.33578 19.2504 3.04685C19.2502 3.24953 19.3001 3.4491 19.3958 3.62778C19.4914 3.80646 19.6298 3.95868 19.7986 4.07088Z"
                    fill="#284A0C"
                  />
                </g>
                <path
                  d="M6.20828 24.43C6.58161 24.4967 6.89828 24.6933 7.15828 25.02C7.41828 25.3467 7.54828 25.7167 7.54828 26.13C7.54828 26.4833 7.45495 26.8033 7.26828 27.09C7.08828 27.37 6.82495 27.5933 6.47828 27.76C6.13161 27.92 5.72828 28 5.26828 28H2.48828V21.05H5.13828C5.61161 21.05 6.01828 21.13 6.35828 21.29C6.69828 21.45 6.95495 21.6667 7.12828 21.94C7.30161 22.2067 7.38828 22.5067 7.38828 22.84C7.38828 23.24 7.28161 23.5733 7.06828 23.84C6.85495 24.1067 6.56828 24.3033 6.20828 24.43ZM3.62828 23.97H5.03828C5.41161 23.97 5.70161 23.8867 5.90828 23.72C6.12161 23.5467 6.22828 23.3 6.22828 22.98C6.22828 22.6667 6.12161 22.4233 5.90828 22.25C5.70161 22.07 5.41161 21.98 5.03828 21.98H3.62828V23.97ZM5.16828 27.07C5.55495 27.07 5.85828 26.9767 6.07828 26.79C6.29828 26.6033 6.40828 26.3433 6.40828 26.01C6.40828 25.67 6.29161 25.4 6.05828 25.2C5.82495 25 5.51495 24.9 5.12828 24.9H3.62828V27.07H5.16828ZM11.1771 28.09C10.6571 28.09 10.1871 27.9733 9.76711 27.74C9.34711 27.5 9.01711 27.1667 8.77711 26.74C8.53711 26.3067 8.41711 25.8067 8.41711 25.24C8.41711 24.68 8.54044 24.1833 8.78711 23.75C9.03378 23.3167 9.37044 22.9833 9.79711 22.75C10.2238 22.5167 10.7004 22.4 11.2271 22.4C11.7538 22.4 12.2304 22.5167 12.6571 22.75C13.0838 22.9833 13.4204 23.3167 13.6671 23.75C13.9138 24.1833 14.0371 24.68 14.0371 25.24C14.0371 25.8 13.9104 26.2967 13.6571 26.73C13.4038 27.1633 13.0571 27.5 12.6171 27.74C12.1838 27.9733 11.7038 28.09 11.1771 28.09ZM11.1771 27.1C11.4704 27.1 11.7438 27.03 11.9971 26.89C12.2571 26.75 12.4671 26.54 12.6271 26.26C12.7871 25.98 12.8671 25.64 12.8671 25.24C12.8671 24.84 12.7904 24.5033 12.6371 24.23C12.4838 23.95 12.2804 23.74 12.0271 23.6C11.7738 23.46 11.5004 23.39 11.2071 23.39C10.9138 23.39 10.6404 23.46 10.3871 23.6C10.1404 23.74 9.94378 23.95 9.79711 24.23C9.65044 24.5033 9.57711 24.84 9.57711 25.24C9.57711 25.8333 9.72711 26.2933 10.0271 26.62C10.3338 26.94 10.7171 27.1 11.1771 27.1ZM17.5541 28.09C17.0341 28.09 16.5641 27.9733 16.1441 27.74C15.7241 27.5 15.3941 27.1667 15.1541 26.74C14.9141 26.3067 14.7941 25.8067 14.7941 25.24C14.7941 24.68 14.9174 24.1833 15.1641 23.75C15.4107 23.3167 15.7474 22.9833 16.1741 22.75C16.6007 22.5167 17.0774 22.4 17.6041 22.4C18.1307 22.4 18.6074 22.5167 19.0341 22.75C19.4607 22.9833 19.7974 23.3167 20.0441 23.75C20.2907 24.1833 20.4141 24.68 20.4141 25.24C20.4141 25.8 20.2874 26.2967 20.0341 26.73C19.7807 27.1633 19.4341 27.5 18.9941 27.74C18.5607 27.9733 18.0807 28.09 17.5541 28.09ZM17.5541 27.1C17.8474 27.1 18.1207 27.03 18.3741 26.89C18.6341 26.75 18.8441 26.54 19.0041 26.26C19.1641 25.98 19.2441 25.64 19.2441 25.24C19.2441 24.84 19.1674 24.5033 19.0141 24.23C18.8607 23.95 18.6574 23.74 18.4041 23.6C18.1507 23.46 17.8774 23.39 17.5841 23.39C17.2907 23.39 17.0174 23.46 16.7641 23.6C16.5174 23.74 16.3207 23.95 16.1741 24.23C16.0274 24.5033 15.9541 24.84 15.9541 25.24C15.9541 25.8333 16.1041 26.2933 16.4041 26.62C16.7107 26.94 17.0941 27.1 17.5541 27.1ZM23.721 25.25L26.261 28H24.721L22.681 25.63V28H21.541V20.6H22.681V24.9L24.681 22.49H26.261L23.721 25.25ZM35.3858 28H34.2458L30.8158 22.81V28H29.6758V21.04H30.8158L34.2458 26.22V21.04H35.3858V28ZM39.2728 28.09C38.7528 28.09 38.2828 27.9733 37.8628 27.74C37.4428 27.5 37.1128 27.1667 36.8728 26.74C36.6328 26.3067 36.5128 25.8067 36.5128 25.24C36.5128 24.68 36.6361 24.1833 36.8828 23.75C37.1295 23.3167 37.4661 22.9833 37.8928 22.75C38.3195 22.5167 38.7961 22.4 39.3228 22.4C39.8495 22.4 40.3261 22.5167 40.7528 22.75C41.1795 22.9833 41.5161 23.3167 41.7628 23.75C42.0095 24.1833 42.1328 24.68 42.1328 25.24C42.1328 25.8 42.0061 26.2967 41.7528 26.73C41.4995 27.1633 41.1528 27.5 40.7128 27.74C40.2795 27.9733 39.7995 28.09 39.2728 28.09ZM39.2728 27.1C39.5661 27.1 39.8395 27.03 40.0928 26.89C40.3528 26.75 40.5628 26.54 40.7228 26.26C40.8828 25.98 40.9628 25.64 40.9628 25.24C40.9628 24.84 40.8861 24.5033 40.7328 24.23C40.5795 23.95 40.3761 23.74 40.1228 23.6C39.8695 23.46 39.5961 23.39 39.3028 23.39C39.0095 23.39 38.7361 23.46 38.4828 23.6C38.2361 23.74 38.0395 23.95 37.8928 24.23C37.7461 24.5033 37.6728 24.84 37.6728 25.24C37.6728 25.8333 37.8228 26.2933 38.1228 26.62C38.4295 26.94 38.8128 27.1 39.2728 27.1ZM50.6598 22.49L48.9498 28H47.7498L46.6398 23.93L45.5298 28H44.3298L42.6098 22.49H43.7698L44.9198 26.92L46.0898 22.49H47.2798L48.3998 26.9L49.5398 22.49H50.6598Z"
                  fill="#284A0C"
                />
                <defs>
                  <clipPath id="clip0_667_1536">
                    <rect
                      width="13.9992"
                      height="14"
                      fill="white"
                      transform="translate(19.2504)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div onClick={toggleNavMobile} className="menu-btn">
              <svg
                width="52"
                height="32"
                viewBox="0 0 52 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_667_1542)">
                  <path
                    d="M31.8329 5.83325H20.167C19.5227 5.83325 19.0004 6.35559 19.0004 6.99992C19.0004 7.64425 19.5227 8.16659 20.167 8.16659H31.8329C32.4773 8.16659 32.9996 7.64425 32.9996 6.99992C32.9996 6.35559 32.4773 5.83325 31.8329 5.83325Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M31.8329 1.75H20.167C19.5227 1.75 19.0004 2.27233 19.0004 2.91667C19.0004 3.561 19.5227 4.08333 20.167 4.08333H31.8329C32.4773 4.08333 32.9996 3.561 32.9996 2.91667C32.9996 2.27233 32.4773 1.75 31.8329 1.75Z"
                    fill="#284A0C"
                  />
                  <path
                    d="M31.8329 9.91675H20.167C19.5227 9.91675 19.0004 10.4391 19.0004 11.0834C19.0004 11.7277 19.5227 12.2501 20.167 12.2501H31.8329C32.4773 12.2501 32.9996 11.7277 32.9996 11.0834C32.9996 10.4391 32.4773 9.91675 31.8329 9.91675Z"
                    fill="#284A0C"
                  />
                </g>
                <path
                  d="M20.0807 21.05V28H18.9407V23.24L16.8207 28H16.0307L13.9007 23.24V28H12.7607V21.05H13.9907L16.4307 26.5L18.8607 21.05H20.0807ZM26.6291 25.11C26.6291 25.3167 26.6158 25.5033 26.5891 25.67H22.3791C22.4124 26.11 22.5758 26.4633 22.8691 26.73C23.1624 26.9967 23.5224 27.13 23.9491 27.13C24.5624 27.13 24.9958 26.8733 25.2491 26.36H26.4791C26.3124 26.8667 26.0091 27.2833 25.5691 27.61C25.1358 27.93 24.5958 28.09 23.9491 28.09C23.4224 28.09 22.9491 27.9733 22.5291 27.74C22.1158 27.5 21.7891 27.1667 21.5491 26.74C21.3158 26.3067 21.1991 25.8067 21.1991 25.24C21.1991 24.6733 21.3124 24.1767 21.5391 23.75C21.7724 23.3167 22.0958 22.9833 22.5091 22.75C22.9291 22.5167 23.4091 22.4 23.9491 22.4C24.4691 22.4 24.9324 22.5133 25.3391 22.74C25.7458 22.9667 26.0624 23.2867 26.2891 23.7C26.5158 24.1067 26.6291 24.5767 26.6291 25.11ZM25.4391 24.75C25.4324 24.33 25.2824 23.9933 24.9891 23.74C24.6958 23.4867 24.3324 23.36 23.8991 23.36C23.5058 23.36 23.1691 23.4867 22.8891 23.74C22.6091 23.9867 22.4424 24.3233 22.3891 24.75H25.4391ZM30.531 22.4C30.9643 22.4 31.351 22.49 31.691 22.67C32.0376 22.85 32.3076 23.1167 32.501 23.47C32.6943 23.8233 32.791 24.25 32.791 24.75V28H31.661V24.92C31.661 24.4267 31.5376 24.05 31.291 23.79C31.0443 23.5233 30.7076 23.39 30.281 23.39C29.8543 23.39 29.5143 23.5233 29.261 23.79C29.0143 24.05 28.891 24.4267 28.891 24.92V28H27.751V22.49H28.891V23.12C29.0776 22.8933 29.3143 22.7167 29.601 22.59C29.8943 22.4633 30.2043 22.4 30.531 22.4ZM39.2351 22.49V28H38.0951V27.35C37.9151 27.5767 37.6785 27.7567 37.3851 27.89C37.0985 28.0167 36.7918 28.08 36.4651 28.08C36.0318 28.08 35.6418 27.99 35.2951 27.81C34.9551 27.63 34.6851 27.3633 34.4851 27.01C34.2918 26.6567 34.1951 26.23 34.1951 25.73V22.49H35.3251V25.56C35.3251 26.0533 35.4485 26.4333 35.6951 26.7C35.9418 26.96 36.2785 27.09 36.7051 27.09C37.1318 27.09 37.4685 26.96 37.7151 26.7C37.9685 26.4333 38.0951 26.0533 38.0951 25.56V22.49H39.2351Z"
                  fill="#284A0C"
                />
                <defs>
                  <clipPath id="clip0_667_1542">
                    <rect
                      width="13.9992"
                      height="14"
                      fill="white"
                      transform="translate(19.0004)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <NavMobile onClose={toggleNavMobile} active={isActive ? 'active' : ''}></NavMobile>
    </>
  );
}