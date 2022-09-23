import { useEffect, useRef } from "react";
import "./styles/index.css";

interface reverseProps {
  reverse: boolean;
}

type linkProps = {
  link: { link: string; theme: string }[];
  reverse: boolean;
};

export const PicturesColumn = ({ reverse, link }: linkProps) => {
  console.log(link, reverse);
  return (
    <>
      <div className="column-container">
        <div
          className={`pictures-container ${reverse === true ? "down" : "up"}`}
        >
          <div className="picture">
            {link.map((picture, index) => {
              return (
                <div className="photography-container" key={index}>
                  <img className="photography" src={picture.link} alt="" />
                </div>
              );
            })}
          </div>
          <div className={"picture pictureClone"}>
            {link.map((picture, index) => {
              return (
                <div className="photography-container" key={index}>
                  <img className="photography" src={picture.link} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
