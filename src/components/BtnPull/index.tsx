import "./styles/index.css";
import { FiMenu } from "react-icons/fi";

export const BtnPull = () => {
  return (
    <div className="container-tabbar">
      <button className="btn-sideBar">
        <FiMenu />
      </button>
    </div>
  );
};
