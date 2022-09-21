import { useEffect, useRef } from "react";
import "./styles/index.css";

type PicturesProps = {
  reverse: boolean;
};

export const PicturesColumn = ({ reverse }: PicturesProps) => {
  return (
    <>
      <div className="column-container">
        <div
          className={`pictures-container ${reverse === true ? "down" : "up"}`}
        >
          <div className="picture">
            {pictures.map((picture, index) => {
              return (
                <>
                  <div className="photography-container">
                    <img className="photography" src={picture} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className={"picture pictureClone"}>
            {pictures.map((picture, index) => {
              return (
                <>
                  <div className="photography-container">
                    <img className="photography" src={picture} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const pictures = [
  "https://images.pexels.com/photos/4732428/pexels-photo-4732428.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/8778462/pexels-photo-8778462.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/5359990/pexels-photo-5359990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13522034/pexels-photo-13522034.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/10866644/pexels-photo-10866644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];
