import { useCallback, useEffect, useRef, useState } from "react";
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
  const [currentTheme, setCurrentTheme] = useState<string>("all");
  const albumContainer = useRef<HTMLDivElement>(null);
  const refPicturesGrid = useRef<HTMLDivElement>(null);

  const handleFilter = () => {
    var themesArray: string[] = [];
    picturesArray.map((picture) => {
      let alreadyExists = themesArray.find((theme) => {
        return theme == picture.theme;
      });
      if (alreadyExists === undefined) {
        themesArray.push(picture.theme);
      }
    });
    setThemes(themesArray);
  };

  const filterByTheme = (filter: string) => {
    const pictureFiltered: picturesArrayType = [];
    if (filter !== "all") {
      picturesArray.map((picture) => {
        if (picture.theme === filter) {
          pictureFiltered.push(picture);
        }
      });
    }
    if (currentTheme !== filter) {
      (async () => {
        setPicturesRender([]);
      })().then(() => {
        setPicturesRender(filter === "all" ? picturesArray : pictureFiltered);
        setCurrentTheme(filter);
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const animeScroll = () => {
    const picturesGridArray = refPicturesGrid.current?.getElementsByClassName(
      "picture-container"
    ) as HTMLCollectionOf<HTMLElement> | null;
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    if (picturesGridArray?.length) {
      for (let index = 0; picturesGridArray?.length > index; index++) {
        if (windowTop > picturesGridArray[index].offsetTop) {
          picturesGridArray[index].classList.add("show");
          picturesGridArray[index].classList.remove("hide");
        } else {
          picturesGridArray[index].classList.add("hide");
          picturesGridArray[index].classList.remove("show");
        }
      }
    }
  };
  useEffect(() => {
    handleFilter();
    setPicturesRender(picturesArray);
  }, []);
  useEffect(() => {
    animeScroll();
    window.addEventListener("scroll", () => {
      animeScroll();
    });
  });

  return (
    <>
      <div className="album-container" ref={albumContainer}>
        <div className="filter-bar">
          <ul>
            <li
              onClick={() => filterByTheme("all")}
              style={{
                color: "all" === currentTheme ? "#fff" : "#ffffffb7",
              }}
            >
              All
            </li>
            {themes?.map((theme, index) => {
              return (
                <li
                  onClick={() => filterByTheme(theme)}
                  key={index}
                  style={{
                    color: theme === currentTheme ? "#fff" : "#ffffffb7",
                  }}
                >
                  {theme}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1>Album </h1>
        </div>
        <div className="pictures-grid" ref={refPicturesGrid}>
          {picturesRender.map((picture, index) => {
            return (
              <div className="picture-container" key={index} id={`${index}`}>
                <img
                  key={index}
                  src={picture.link}
                  className={"picture-album"}
                  alt={picture.theme}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
