// import React, {Link} from "react";
// import React, { Link } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./../styles/home.css";

// Importing neccessary code from bootstrap to make it responsive
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

// images for Hero page
import hero1 from "./../Images/Argentina fotos web/ARG28.jpg";
import hero2 from "./../Images/Argentina fotos web/ARG12.jpg";
import hero3 from "./../Images/Argentina fotos web/ARG19.jpg";

import Img1 from "./../Images/Argentina fotos web/ARG28.jpg";
import Img2 from "./../Images/Argentina fotos web/ARG15.jpg";
import Img3 from "./../Images/Argentina fotos web/ARG3.jpg";
import Img4 from "./../Images/Argentina fotos web/ARG21.jpg";
import Img5 from "./../Images/Argentina fotos web/ARG1.jpg";
import Img6 from "./../Images/Argentina fotos web/ARG24.jpg";
import Img7 from "./../Images/Argentina fotos web/ARG7.jpg";
import Img8 from "./../Images/Argentina fotos web/ARG8.jpg";

// Images and content for cards in home Page

// import DestinationsPage from "../Components/DestinationsPage";

const homeImages = [
  {
    key: "1",
    title: "Mendoza",
    img: Img1,
  },
  {
    key: "2",
    title: "Tierra del Fuego",
    img: Img2,
  },
  {
    key: "3",
    title: "Puerto Madrin",
    img: Img3,
  },
  {
    key: "4",
    title: "Buenos Aires",
    img: Img4,
  },
  {
    key: "5",
    title: "Jujuy",
    img: Img5,
  },
  {
    key: "6",
    title: "Chalten",
    img: Img6,
  },
];

const HomePage = (props) => {
  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card");
  //   cards.forEach((card) => {
  //     card.addEventListener("mouseenter", () => {
  //       card.classList.add("hovered");
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       card.classList.remove("hovered");
  //     });
  //   });
  // }, []);

  return (
    <>
      <section className="Section1-Home">
        <Carousel className="slider">
          {[
            { img: hero1, buttonHref: "/gallery" },
            { img: hero2, buttonHref: "/about" },
            { img: hero3, buttonHref: "/news" },
          ].map((item, index) => (
            <Carousel.Item key={index} interval={index === 0 ? 2000 : 500}>
              <RouterLink to={item.buttonHref}>
                <img
                  className="d-block w-100 HeroImg"
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                />
              </RouterLink>
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section className="Section2-Home">
        <div className="Container-Card-Home">
          <h4 className="text-white padding-50">
            There are many reasons why you should consider traveling to
            Argentina, here are some:
          </h4>

          {/* Text for the cards in home page */}
          <div className="Inner-container-home">
            {[
              {
                title: "Adventure sports",
                description:
                  "Argentina offers a wide range of adventure sports for thrill-seekers. From whitewater rafting in the Andean rivers to paragliding over picturesque landscapes, there are plenty of adrenaline-pumping activities to enjoy. You can also go horseback riding in the scenic Patagonian region or explore the rugged terrain of Tierra del Fuego on a hiking or biking expedition.",
              },
              {
                title: "Natural beauty",
                description:
                  "Argentina is a country of incredible natural beauty, with stunning landscapes that include the Andes mountains, Iguazu Falls, and Patagonia. These beautiful places offer opportunities for outdoor adventures like hiking, skiing, and camping.",
              },
              {
                title: "Cultural heritage",
                description:
                  "Argentina has a rich cultural heritage, influenced by its European, Indigenous, and African roots. Visitors can explore the country's museums, galleries, and historic sites, such as the iconic Teatro Colón opera house in Buenos Aires.",
              },
              {
                title: "Food and wine",
                description:
                  "Argentina is known for its delicious food and wine. Visitors can indulge in world-famous Argentine steak, empanadas, and mate tea. The country is also home to some of the world's best vineyards, where you can enjoy Malbec wine and other varietals.",
              },
              {
                title: "Tango",
                description:
                  "Tango is a passionate dance that originated in Buenos Aires and is an important part of Argentine culture. Visitors can experience tango shows and lessons or even try their hand at dancing in one of the city's many milongas.",
              },
              {
                title: "Friendly people",
                description:
                  "Argentine people are known for their warm hospitality and friendly demeanor. Visitors are often welcomed with open arms and encouraged to immerse themselves in the country's rich culture.",
              },
              // Function to map all the information
            ].map((item, index) => (
              <div key={index} className="card Home-Text">
                <p>
                  <strong>{item.title}:</strong>
                  <br />
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="Container-Must-do">
          <div className="Activities-must">
            {homeImages.map(({ key, title, img }) => (
              <div key={key}>
                <div className="card-must-do">
                  <p className="text-white padding20px bold">{title}</p>
                  <img  src={img} className="Inner-img" alt={title} />

                  <button className="btn btn-light padding20px">
                    <RouterLink className="text-black" to="/destinations">More information</RouterLink>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
