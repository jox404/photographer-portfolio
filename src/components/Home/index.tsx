import React, { useEffect, useRef, useState } from "react";
import { PicturesColumn } from "../PicturesColumn";
import "./styles/index.css";
import data from "../../assets/data/pictures.json";

type ArrayColumns = {
  link: string;
  theme: string;
}[][];

export const Home = () => {
  const [dataPictures, setDataPictures] =
    useState<{ link: string; theme: string }[]>(data);

  const [columnsWithPictures, setColumnsWithPictures] = useState<ArrayColumns>([
    [{ link: "", theme: "" }],
    [],
  ]);

  const shufflerPhotographs = (): any => {
    const width = window.screen.width;
    let amountColumn = 0;
    switch (true) {
      case width <= 1360:
        amountColumn = 3;
        break;
      case width <= 1980:
        amountColumn = 5;
        break;
      case width > 1980:
        amountColumn = 6;
        break;
    }

    var columnsWithPicture: {
      link: string;
      theme: string;
    }[][] = [];

    for (let currentColumn = 0; currentColumn < amountColumn; currentColumn++) {
      var arrayPictures: { link: string; theme: string }[] = [];

      var lastRandomIndex = 0;
      for (let picturesInColumn = 0; picturesInColumn < 5; ) {
        var currentRandomIndex = 0;
        currentRandomIndex = Math.floor(Math.random() * dataPictures.length);
        if (lastRandomIndex !== currentRandomIndex) {
          arrayPictures.push(dataPictures[currentRandomIndex]);
          picturesInColumn++;
        } /* else { //trabalhar melhor esse else
          picturesInColumn = picturesInColumn
        } */
        lastRandomIndex = currentRandomIndex;
      }
      columnsWithPicture.push(arrayPictures);
    }
    setColumnsWithPictures(columnsWithPicture);
  };

  useEffect(() => {
    shufflerPhotographs();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="columns-container">
          {columnsWithPictures.map((column, index) => {
            return (
              <PicturesColumn
                reverse={index % 2 == 0}
                link={column}
                key={index}
              />
            );
          })}
        </div>
        <div className="presentation-container">
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
