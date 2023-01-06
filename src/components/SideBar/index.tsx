import "./styles/index.css";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import logo from "../../assets/icons/logo.svg";

export const SideBar = () => {
  const redirectTo = (link: string): void => {
    window.location.replace(link);
  };
  return (
    <>
      <nav className="container-sidebar">
        <div className="logo-container-sidebar">
          <span>
            <img src={logo} alt="" width={"188px"} height={"138px"} />
          </span>
        </div>
        <div className="navigation-container-sidebar">
          <ul>
            <li onClick={() => redirectTo("#/")}>Home</li>
            <li onClick={() => redirectTo("#/album")}>Album</li>
            <li onClick={() => redirectTo("#/services")}>Services</li>

            <li onClick={() => redirectTo("#/extra")}>Extra</li>
          </ul>
        </div>
        <div className="contacts-container-sidebar">
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
      </nav>
    </>
  );
};
