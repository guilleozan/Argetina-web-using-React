import React from "react";
import { Accordion } from "react-bootstrap";
import Img1 from "./../Images/Argentina fotos web/ARG1.jpg";
import Img2 from "./../Images/Argentina fotos web/ARG2.jpg";
import Img3 from "./../Images/Argentina fotos web/ARG3.jpg";
import Img4 from "./../Images/Argentina fotos web/ARG4.jpg";
import Img5 from "./../Images/Argentina fotos web/ARG5.jpg";
import Img6 from "./../Images/Argentina fotos web/ARG6.jpg";
import Img7 from "./../Images/Argentina fotos web/ARG7.jpg";
import Img8 from "./../Images/Argentina fotos web/ARG8.jpg";
import "./../styles/About.css";

export default function AboutPage() {
  return (
    <>
      <section className="Hero-About">
        <div className="col1">
          <div className="cont-img">
            <img src={Img7} className="InnerAboutImg " alt="Argentina" />
          </div>
        </div>
        <div className="col2">
          <h2>
            Welcome to our About section, where we invite you to discover the
            essence of our passion for Argentina.
          </h2>
          <p>
            <strong>Friendly people:</strong>
            <br />
            Argentine people are known for their warm hospitality and friendly
            demeanor. Visitors are often welcomed with open arms and encouraged
            to immerse themselves in the country's rich culture.
          </p>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>Learn more</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our mission is to provide you with an immersive experience
                  that goes beyond the surface, delving into the heart and soul
                  of Argentina. Through our curated content, personalized
                  recommendations, and expert insights, we strive to inspire and
                  guide you on your journey to uncover the hidden gems and
                  iconic destinations that make Argentina truly unforgettable.
                  <br />
                  With a deep appreciation for Argentina's diverse regions, from
                  the cosmopolitan streets of Buenos Aires to the untamed
                  wilderness of Patagonia, we aim to capture the spirit of each
                  place and share it with you. Our team of passionate explorers,
                  storytellers, and travel enthusiasts have personally traversed
                  the length and breadth of Argentina, seeking out the most
                  authentic and captivating experiences to ensure that your
                  adventure exceeds expectations. But our commitment goes beyond
                  travel. We believe in sustainable and responsible tourism,
                  promoting cultural preservation, environmental conservation,
                  and community engagement.
                  <br />
                  By partnering with local businesses, supporting local
                  artisans, and fostering connections with the communities we
                  visit, we strive to create a positive impact and contribute to
                  the sustainable development of Argentina's tourism industry.
                  Whether you are a first-time visitor or a seasoned traveler
                  seeking a deeper connection with Argentina, we are here to be
                  your trusted companion, offering you a wealth of resources,
                  insider tips, and personalized assistance to help you craft a
                  journey tailored to your interests and preferences. So come
                  with us as we unlock the secrets of Argentina, immersing
                  ourselves in its rich tapestry of history, savoring its
                  gastronomic delights, and connecting with its warm and
                  welcoming people.
                  <br />
                  Let us be your guide as you embark on an extraordinary
                  adventure that will leave you with cherished memories and a
                  lifelong love for the captivating land of Argentina.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Hero-About">
        <div className="col1">
          <h2>
            Discover the Magic of Wales: Unveiling a Land of Legends and Beauty
          </h2>
          <p>
            Nestled amidst rolling hills, dramatic coastlines, and picturesque
            landscapes, Wales offers a captivating blend of ancient heritage,
            vibrant culture, and breathtaking natural beauty. From the majestic
            peaks of Snowdonia National Park to the stunning beaches of the
            Pembrokeshire Coast, each corner of Wales holds a unique story
            waiting to be discovered.
          </p>
        </div>
        <div className="col2">
          <div className="cont-img">
            <img src={Img3} className="InnerAboutImg " alt="Argentina" />
          </div>
        </div>
      </section>
    </>
  );
}
