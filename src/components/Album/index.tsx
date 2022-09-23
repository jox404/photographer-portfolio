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
  const [themes, setThemes] = useState<string[]>();

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
    setThemes(themes);
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
    setPicturesRender(picturesArray);
    console.log();
  }, []);

  return (
    <>
      <div className="album-container">
        <div className="filter-bar">
          <ul>
            <li onClick={() => setPicturesRender(picturesArray)}>All</li>
            {themes?.map((theme, index) => {
              return (
                <>
                  <li onClick={() => filterByTheme(theme)}>{theme}</li>
                </>
              );
            })}
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
