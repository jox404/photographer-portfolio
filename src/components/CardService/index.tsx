import { useEffect, useRef } from "react";
import "./styles/index.css";

type CardServiceProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  anchor: number;
};

export const CardService = ({
  title,
  description,
  image,
  reverse = false,
  anchor,
}: CardServiceProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const animeCard = () => {
    const cardTop = (cardRef.current?.offsetTop as number) || null;
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    if (cardTop != null) {
      if (windowTop > cardTop) {
        cardRef.current?.classList.add(
          reverse ? "animate-growRight" : "animate-growLeft"
        );
      }
    }
  };

  useEffect(() => {
    animeCard();
    window.addEventListener("scroll", () => {
      animeCard();
    });
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        flexDirection: reverse === true ? "row-reverse" : "row",
      }}
      className="card-service-container"
      id={`anchor${anchor}`}
    >
      <div>
        <div className="service-info">
          <h2>{title}</h2>
          <img src={image} />
          <p>{description}</p>
          <button>Hire Service</button>
        </div>
      </div>
      <div className="card-service-image">
        <div style={{ backgroundImage: `url(${image})` }} />
      </div>
    </div>
  );
};
