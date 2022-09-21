import { useEffect, useState } from "react";
import data from "../../assets/data/pictures.json";
import "./styles/index.css";

type picturesArrayType = {
  link: string;
  theme: string;
}[];

export const Album = () => {
  const [picturesArray, setPicturesArray] = useState<picturesArrayType>(data);
  const [picturesRender, setPicturesRender] = useState<
    Array<{
      link: string;
      theme: string;
    }>
  >([]);
  const handleFilter = () => {
    var themes: string[] = [];
    picturesArray.map((picture) => {
      let alreadyExists = themes.find((theme) => {
        return theme == picture.theme;
      });
      if (alreadyExists === undefined) {
        themes.push(picture.theme);
      }
    });
  };

  const filterByTheme = (filter: string) => {
    const pictureFiltered: picturesArrayType = [];
    picturesArray.map((picture) => {
      if (picture.theme === filter) {
        pictureFiltered.push(picture);
      }
    });
    setPicturesRender(pictureFiltered);
    console.log(pictureFiltered);
  };

  useEffect(() => {
    handleFilter();
    filterByTheme("japan");
    console.log();
  }, []);

  return (
    <>
      <div className="album-container">
        <div className="filter-bar">
          <ul>
            <li>Japan</li>
            <li>São Paulo</li>
            <li>People</li>
          </ul>
        </div>
        <div className="pictures-grid">
          {picturesRender.map((picture, index) => {
            return (
              <div className="picture-container">
                <img
                  key={index}
                  src={picture.link}
                  className={"picture-album"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
