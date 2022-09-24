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
  return (
    <div
      className="card-service-container"
      style={{
        flexDirection: reverse === true ? "row-reverse" : "row",
        animationName: reverse === true ? "growRight" : "growLeft",
      }}
      id={`anchor${anchor}`}
    >
      <div>
        <div className="service-info">
          <h2>{title}</h2>
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
