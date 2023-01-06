import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "./styles/index.css";
import perfil from "../../assets/images/perfil.jpeg";

export const Extra = () => {
  const redirectTo = (link: string): void => {
    window.open(link);
  };
  return (
    <>
      <div className="extra-container">
        <div>
          <h1>About me</h1>
        </div>
        <div>
          <div>
            <img
              src={perfil}
              alt="foto-de-perfil"
              /*   width={300} */
            />
          </div>
          <div>
            <span>
              <p>
                Hello Word! Eu Sou o João, Desenvolvedor Front-end Junior,
                atualmente moro em Santana de parnaiba-SP e tenho 22 anos.
              </p>
              <p>
                Sou um amante da tecnologia, e na TI vi uma forma de me
                aproximar dela. Inicialmente eu fui para a Infra, mas não era
                bem o que eu queria, dai resolvi começar a estudar programação,
                e desde então não parei, montei uma boa base de JavaScript e fui
                aprendendo sobre tecnologias que o cercam, React, React Native,
                Node.js, FireBase etc.
              </p>
              <p>
                Meu primeiro trabalho profissional na area foi uma "one page",
                que fiz como freelancer, mas espero fazer outros logo mais.
                Estou muito empolgado para aprender tecnologias novas e
                desenvolver ainda mais minha habilidades, por isso estou sempre
                procurando novas oportunidades.
              </p>
              <p>
                Sou estudante de Inglês, consigo ler artigos em inglês, mas por
                enquanto eu não consigo me expressar em inglês. Tambem Estudo
                Japonês(12月で日本語試験を受けます).
              </p>
            </span>
          </div>
        </div>
        <span className="contact-container">
          <h2>Contact</h2>
          <ul>
            <li>
              <BsGithub
                className="social-media-icon"
                onClick={() => {
                  redirectTo("https://github.com/jox404");
                }}
              />
            </li>
            <li>
              <BsLinkedin
                className="social-media-icon"
                onClick={() => {
                  redirectTo("https://www.linkedin.com/in/joaocosta105/");
                }}
              />
            </li>
            <li>
              <BsWhatsapp
                className="social-media-icon"
                onClick={() => {
                  redirectTo(
                    "https://api.whatsapp.com/send/?phone=11987984340&text&type=phone_number&app_absent=0"
                  );
                }}
              />
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};
