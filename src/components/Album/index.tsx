import React from "react";
import PicturesColumn from "../PicturesColumn";
import "./styles/index.css";

export default () => {
  return (
    <>
      <div className="album-container">
        <PicturesColumn reverse={false} />
        <PicturesColumn reverse={true} />
        <PicturesColumn reverse={false} />
        <PicturesColumn reverse={true} />
        <div className="home-presentation">
          <div>
            <h1 className="presentation-title">Lorem ipsum dolor sit amet </h1>
            <p className="presentation-subTitle">
              consectetur adipisicing elit. Quae tempore cum, minima nostrum
              facere aut hic laborum asperiores debitis maiores saepe autem ut
              voluptas amet a cumque maxime beatae sunt.
            </p>
            <button>Lorem ipsum</button>
          </div>
        </div>
      </div>
    </>
  );
};
