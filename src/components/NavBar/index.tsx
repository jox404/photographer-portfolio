import "./styles/index.css";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import logo from "../../assets/icons/logo.svg";

export const NavBar = () => {
  const redirectTo = (link: string): void => {
    window.location.replace(link);
  };
  return (
    <>
      <div className="container-navbar">
        <div className="logo-container-navbar">
          <span>
            <img src={logo} alt="" width={"80%"} />
          </span>
        </div>
        <div className="navigation-container-navbar">
          <ul>
            <li onClick={() => redirectTo("/")}>Home</li>
            <li onClick={() => redirectTo("/album")}>Album</li>
            <li onClick={() => redirectTo("/services")}>Services</li>

            <li onClick={() => redirectTo("/extra")}>Extra</li>
          </ul>
        </div>
        <div className="contacts-container-navbar">
          <ul className="social-media-list">
            <li>
              <BsFacebook className="social-media-icon" />
            </li>
            <li>
              <BsTwitter className="social-media-icon" />
            </li>
            <li>
              <BsPinterest className="social-media-icon" />
            </li>
            <li>
              <BsLinkedin className="social-media-icon" />
            </li>
            <li>
              <BsInstagram className="social-media-icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
