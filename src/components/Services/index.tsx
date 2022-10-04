import { CardService } from "../CardService";
import "./styles/index.css";
import serviceData from "../../assets/data/services.json";

export const Services = () => {
  const redirectTo = (link: string): void => {
    window.location.replace(link);
  };
  return (
    <>
      <div className="services-container">
        <div className="navbar">
          <ul>
            {serviceData.map((service, index) => {
              return (
                <li onClick={() => redirectTo(`#anchor${index}`)} key={index}>
                  {service.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1>Services</h1>
          <div className="cards-container">
            {serviceData.map((service, index) => {
              return (
                <CardService
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  reverse={index % 2 == 0}
                  anchor={index}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
