import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "./../styles/Contact.css";

const msg = "Your enquiry has been submitted";

export default function ContactPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = () => {
    setShowSuccessMessage(true);
  };

  return (
    <><div className="global-padding">
      <section className="formulario-contenedor">
        <Form className='f1' action="/contacto" method="post">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="descripcionFormulario">Name</Form.Label>
            <Form.Control type="text" placeholder="" name="name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="descripcionFormulario">
              Phone Number
            </Form.Label>
            <Form.Control type="text" placeholder="" name="phone" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="descripcionFormulario">
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="" name="email" required />
          </Form.Group>
          <Form.Group className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Options
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Trips</option>
              <option value="2">Gastronomy</option>
              <option value="3">Adventures</option>
              <option value="4">Other</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="descripcionFormulario">Enquiry</Form.Label>
            <Form.Control as="textarea" rows={3} name="enquiry" required />
          </Form.Group>
          <div className="botoneEnviar">
            {showSuccessMessage ? (
              <p>
              Your message has been successfully sent. We look forward 
              to connecting with you soon.</p>
            ) : null}
            <button
              className="btn btn-primary descripcionFormulario"
              type="button"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </Form>
      </section>
      <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4145995975687!2d174.76190707574358!3d-36.85649377993768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dbf845b61d9%3A0xfe6e8f48a693ffbf!2sWhitecliffe%20College%20Of%20Arts%20And%20Design!5e0!3m2!1sen!2snz!4v1686866462783!5m2!1sen!2snz"
              title="Google Maps"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      <br />
      </div>
      <br />
      <section className="Faqs ">
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
                <strong> What is the best time to visit Argentina?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The best time to visit Argentina depends on the regions you plan
                to explore and the activities you want to engage in. Argentina
                experiences diverse climates due to its vast size. Generally,
                the summer months of December to February offer pleasant weather
                throughout the country, making it an ideal time for outdoor
                activities and exploring destinations like Buenos Aires,
                Mendoza, and the Iguazu Falls. However, if you're interested in
                visiting Patagonia or engaging in winter sports, the months of
                June to August provide the best conditions. It's recommended to
                research the specific regions you plan to visit and consider
                their climate and attractions when deciding the best time for
                your Argentina adventure
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong> Do I need a visa to visit Argentina?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The visa requirements for Argentina vary depending on your
                nationality. Citizens from many countries, including the United
                States, Canada, the European Union, Australia, and New Zealand,
                among others, can enter Argentina as tourists for up to 90 days
                without a visa. However, it's important to check the specific
                visa requirements for your country of citizenship before
                traveling. Some nationalities may require a visa or need to pay
                a reciprocity fee before entering the country. It's always
                recommended to verify the most up-to-date visa information with
                the nearest Argentine embassy or consulate before your trip.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>
                  What are some must-visit destinations in Argentina?
                </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Argentina offers a wealth of incredible destinations to explore.
                Some of the must-visit places include:
                <li>
                  Buenos Aires: Argentina's vibrant capital city, known for its
                  European charm, tango performances, and rich cultural
                  heritage.
                </li>
                <li>
                  Iguazu Falls: A UNESCO World Heritage site and one of the
                  world's most stunning natural wonders, located on the border
                  between Argentina and Brazil.
                </li>
                <li>
                  Patagonia: A vast region in the southern part of Argentina,
                  known for its breathtaking landscapes, including the Perito
                  Moreno Glacier, the stunning mountains of El Chalten, and the
                  southernmost city in the world, Ushuaia.
                </li>
                <li>
                  Mendoza: Argentina's renowned wine region, famous for its
                  Malbec wines, beautiful vineyards, and the stunning backdrop
                  of the Andes Mountains.
                </li>
                <li>
                  Salta and Jujuy: Located in the Northwest, these regions offer
                  stunning landscapes, including colorful rock formations, salt
                  flats, and traditional indigenous culture.
                </li>
                <br />
                These are just a few examples, and Argentina has much more to
                offer. The country's diverse landscapes, vibrant cities, and
                rich cultural heritage ensure that every traveler can find
                something to suit their interests and preferences.
              </div>
            </div>
          </div>
        </div>
        <br/>
      </section>
    </>
  );
}
