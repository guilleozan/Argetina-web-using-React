import React, { useEffect } from "react";
import styles from "./../styles/Destinations.css";
import Img1 from "./../Images/Argentina fotos web/ARG17.jpg";
import Img2 from "./../Images/Argentina fotos web/ARG12.jpg";

import DestinationsItems from './../reusable-components/DestinationsItems'
const DestinationsPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".containerDestination");
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop <= windowHeight / 2) {
        container.classList.add("scrolled");
      } else {
        container.classList.remove("scrolled");
      }
    };

    const handleMouseMove = (e) => {
      const container = document.querySelector(".containerDestination");
      const mouseX = e.clientX;
      const containerWidth = container.offsetWidth;
      const percentX = (mouseX / containerWidth) * 80;
      const image2 = document.querySelector(".image2");
      image2.style.transform = `translateX(${percentX}%)`;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="containerDestination">
        <div className="image-container">
          <img className="image1" src={Img1} alt="Imagen 1" />
          <h2 className="image-text">
            Unveiling Argentina: Explore the Land of Wonders
          </h2>
          <img className="image2" src={Img2} alt="Imagen 2" />
        </div>
      </div>
     
      <DestinationsItems/>
      
     
      <div className="i-frame">
        {" "}
        <iframe
          src="https://www.booking.com/searchresults.en-gb.html?ss=Argentina&dest_type=country&no_rooms=2&src=searchresults&lang=en-gb&group_adults=4&ssne=Argentina&checkin=2023-07-13&label=en-nz-booking-desktop-ZN8l7oy_3mfJFWuQ*E32SgS652735320679%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2558630230%3Alp1011065%3Ali%3Adec%3Adm&sb_travel_purpose=leisure&sb=1&group_children=0&checkout=2023-07-16&efdco=1&src_elem=sb&aid=2336991&ssne_untouched=Argentina&ltfd=1%3A1%3A11-2023%3A1&dest_id=10&auth_success=1"
          title="Booking.com"
          width="100%"
          height="600px"
        ></iframe>
      

      </div>
     
    </div>
  );
};

export default DestinationsPage;
