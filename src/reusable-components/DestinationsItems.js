
import React, { useState } from "react";
import styles from './../styles/News.css';
import image from './../Images/ARG2.jpg';

import Img1 from "./../Images/Argentina fotos web/ARG1.jpg";
import Img2 from "./../Images/Argentina fotos web/ARG2.jpg";
import Img3 from "./../Images/Argentina fotos web/ARG3.jpg";
import Img4 from "./../Images/Argentina fotos web/ARG4.jpg";
import Img5 from "./../Images/Argentina fotos web/ARG5.jpg";
import Img6 from "./../Images/Argentina fotos web/ARG6.jpg";
import Img7 from "./../Images/Argentina fotos web/ARG7.jpg";
import Img8 from "./../Images/Argentina fotos web/ARG8.jpg";
// const homeImages = [
//   { key: 1, img: Img1 },
//   { key: 2, img: Img2 },
//   { key: 3, img: Img3 },
//   { key: 4, img: Img4 },
//   { key: 5, img: Img5 },
//   { key: 6, img: Img6 },
//   { key: 7, img: Img7 },
//   { key: 8, img: Img8 },
// ];

const homeImages = [
  { key: 1, img: Img1, provinceId: 1 },
  { key: 2, img: Img2, provinceId: 2 },
  { key: 3, img: Img3, provinceId: 3 },
  { key: 4, img: Img4, provinceId: 4 },
  { key: 5, img: Img5, provinceId: 5 },
  { key: 6, img: Img6, provinceId: 6 },
  { key: 7, img: Img7, provinceId: 7 },
  { key: 8, img: Img8, provinceId: 8 },
];
const data = [
  {
    id: 1,
    key: '1',
    title: 'Buenos Aires',
    text: 'Buenos Aires is the capital city of Argentina, known for its vibrant culture, tango music, and delicious cuisine. You can explore historic neighborhoods like San Telmo and La Boca, visit world-class museums like MALBA and the National Museum of Fine Arts, or enjoy a stroll in the beautiful Palermo Woods.',
    activities: ['Visit the iconic Obelisco', 'Take a boat tour in Tigre', 'Explore the Recoleta Cemetery'],
    attractions: ['Teatro Colon', 'Plaza de Mayo', 'Casa Rosada'],
    image: image,
    text3: 'Buenos Aires offers a perfect blend of history, art, and vibrant city life. With its diverse neighborhoods, rich cultural heritage, and a wide range of attractions and activities, it is an ideal destination for those seeking a dynamic and exciting travel experience.'
  },
  {
    id: 2,
    key: '2',
    title: 'Salta',
    text: 'Salta is a province located in the northwest of Argentina, famous for its stunning landscapes and rich cultural heritage. You can visit the colonial city of Salta, explore the breathtaking Quebrada de Humahuaca, or take a trip to the high-altitude salt flats of Salinas Grandes.',
    activities: ['Discover the colorful Cerro San Bernardo', 'Visit the MAAM Museum', 'Taste traditional empanadas'],
    attractions: ['Cachi', 'Purmamarca', 'Cafayate'],
    images: Img3,
    text3: 'Salta offers a unique opportunity to immerse yourself in the vibrant traditions and stunning natural beauty of northwestern Argentina. From colonial architecture to stunning landscapes and traditional cuisine, Salta is a must-visit destination for those seeking an authentic cultural experience.'
  },
  {
    id: 3,
    key: '3',
    title: 'Cordoba',
    text: 'Cordoba is a province in central Argentina, known for its beautiful landscapes, colonial architecture, and vibrant nightlife. You can explore the picturesque town of Villa General Belgrano, hike in the scenic Sierras de Cordoba mountains, or visit the historic Jesuit Block in the city of Cordoba.',
    activities: ['Visit the Jesuit Estancias', 'Take a horseback ride in Los Molinos', 'Explore the Capilla del Monte'],
    attractions: ['Villa Carlos Paz', 'Alta Gracia', 'La Cumbrecita'],
    images: [''],
    text3: 'Cordoba is a province that combines natural beauty, rich history, and a lively atmosphere. With its charming towns, picturesque landscapes, and a wide range of outdoor activities, Cordoba offers a perfect escape for nature lovers and adventure seekers.'
  },
  {
    id: 4,
    key: '4',
    title: 'Mendoza',
    text: 'Mendoza is a province in western Argentina, renowned for its world-class wine production and stunning mountain scenery. You can explore the vineyards of the Lujan de Cuyo and Uco Valley regions, go hiking or skiing in the majestic Andes Mountains, or indulge in gourmet cuisine paired with exceptional wines.',
    activities: ['Take a wine tour and tasting in the vineyards', 'Embark on a scenic drive along the famous Route 7', 'Climb to the summit of Aconcagua, the highest peak in the Americas'],
    attractions: ['Parque Provincial Aconcagua', 'Cerro de la Gloria', 'Puente del Inca'],
    images: [''],
    text3: 'Mendoza is a paradise for wine enthusiasts and outdoor adventurers alike. With its stunning landscapes, award-winning wineries, and exhilarating outdoor activities, it offers a perfect blend of relaxation, gastronomy, and adventure.'
  },
  {
    id: 5,
    key: '5',
    title: 'Tierra del Fuego',
    text: 'Tierra del Fuego is a province in the southernmost part of Argentina, renowned for its rugged landscapes, pristine wilderness, and unique wildlife. You can explore the stunning Tierra del Fuego National Park, visit the charming city of Ushuaia, or take a boat trip to see penguins and sea lions.',
    activities: ['Embark on a boat tour through the Beagle Channel', 'Hike in the otherworldly landscapes of Tierra del Fuego National Park', 'Visit the End of the World Museum'],
    attractions: ['Ushuaia', 'Cape Horn', 'Lapataia Bay'],
    images: [''],
    text3: 'Tierra del Fuego is a destination like no other, where you can witness the raw beauty of nature in its purest form. From majestic mountains to vast glaciers and incredible wildlife, this province offers an unforgettable experience for nature lovers and adventurers.'
  },
  {
    id: 6,
    key: '6',
    title: 'Jujuy',
    text: 'Jujuy is a province located in the northwest region of Argentina, known for its stunning landscapes, vibrant indigenous culture, and colorful traditions. You can explore the picturesque town of Purmamarca and its famous Hill of Seven Colors, visit the historic city of San Salvador de Jujuy, or venture into the dramatic landscapes of the Quebrada de Humahuaca.',
    activities: ['Hike to the top of Cerro de los Siete Colores', 'Visit the Tilcara Archaeological Museum', 'Experience the vibrant Carnaval celebrations'],
    attractions: ['Quebrada de Humahuaca', 'Purmamarca', 'Salinas Grandes'],
    images: [''],
    text3: 'Jujuy offers a unique blend of natural beauty, cultural heritage, and warm hospitality. From breathtaking mountain vistas to fascinating archaeological sites and traditional markets, Jujuy provides an enriching and immersive experience for travelers seeking authenticity.'
  },
  {
    id: 7,
    key: '7',
    title: 'Santa Cruz',
    text: 'Santa Cruz is the largest province in Argentina, situated in the southern region and offering diverse landscapes that range from rugged mountains to icy glaciers. You can explore the world-famous Perito Moreno Glacier, visit the charming town of El Calafate, or embark on an unforgettable journey to the stunning Los Glaciares National Park.',
    activities: ['Take a boat tour to see the Perito Moreno Glacier up close', 'Hike in the Fitz Roy Mountain range', 'Explore the ancient Cueva de las Manos'],
    attractions: ['Perito Moreno Glacier', 'El Chaltén', 'Torres del Paine (partially in Chile)'],
    images: [''],
    text3: "Santa Cruz is a paradise for nature enthusiasts, with its awe-inspiring glaciers, towering mountains, and pristine wilderness. Whether you're an adventure seeker or simply seeking tranquility amidst breathtaking landscapes, Santa Cruz offers an unforgettable journey into the heart of Patagonia."
  },
  {
    id: 8,
    key: '8',
    title: 'Misiones',
    text: 'Misiones is a province located in northeastern Argentina, known for its lush rainforests, remarkable biodiversity, and the awe-inspiring Iguazu Falls. You can explore the UNESCO World Heritage-listed Iguazu National Park, visit the charming town of Puerto Iguazu, or discover the Jesuit ruins of San Ignacio Mini.',
    activities: ['Witness the mighty Iguazu Falls from various viewpoints', 'Take a boat ride under the falls', 'Discover the Guarani culture in local communities'],
    attractions: ['Iguazu Falls', 'Parque Provincial Moconá', 'Jesuit ruins of San Ignacio Mini'],
    images: [' '],
    text3: 'Misiones is a haven for nature lovers and history enthusiasts alike. With its breathtaking waterfalls, dense rainforests, and well-preserved colonial ruins, this province offers a captivating experience that showcases the beauty and cultural richness of Argentina.'
  },
  {
    id: 9,
    key: '9',
    title: 'Santiago del Estero',
    text: 'Santiago del Estero is a province located in the north of Argentina, known for its rich history, cultural heritage, and stunning natural landscapes. You can visit the colonial city of Santiago del Estero, explore the scenic Río Dulce, or immerse yourself in the traditional folklore and music of the region.',
    activities: ['Explore the Termas de Rio Hondo', 'Visit the Santiago del Estero Cathedral', 'Discover the Quilmes Ruins'],
    attractions: ['Río Dulce National Park', 'Termas de Rio Hondo', 'Lago Ojo del Mar'],
    images: [' '],
    text3: 'Santiago del Estero offers a unique blend of history, nature, and cultural experiences. With its charming towns, natural reserves, and warm hospitality, it invites visitors to discover the hidden treasures of Argentina\'s northern region.'
  },
  {
    id: 10,
    key: '10',
    title: 'Catamarca',
    text: 'Catamarca is a province located in the northwest of Argentina, known for its breathtaking landscapes, rugged mountains, and ancient indigenous cultures. You can explore the stunning valleys of Calchaquí and Ambato, visit the charming town of San Fernando del Valle de Catamarca, or hike to the summit of majestic mountains like El Fraile or El Manchao.',
    activities: ['Visit the El Shincal archaeological site', 'Trek through the Campo de Piedra Pómez', 'Experience the annual Fiesta Nacional e Internacional del Poncho'],
    attractions: ['Quebrada del Río Las Conchas', 'Fiambalá', 'Parque Nacional El Leoncito'],
    images: [' '],
    text3: 'Catamarca showcases the natural wonders of Argentina\'s northwest, with its impressive landscapes, ancient ruins, and vibrant traditions. Whether you seek adventure, cultural immersion, or serene beauty, Catamarca offers a memorable experience for all types of travelers.'
  },
  {
    id: 11,
    key: '11',
    title: 'La Rioja',
    text: 'La Rioja is a province in the northwest of Argentina, renowned for its stunning natural landscapes, colonial architecture, and rich wine production. You can explore the picturesque city of La Rioja, visit the Ischigualasto Provincial Park (also known as Valle de la Luna), or indulge in wine tasting tours in the Famatina Valley.',
    activities: ['Hike to the Puerta de la Quebrada', 'Visit the Cathedral Basilica of La Rioja', 'Experience the vibrant La Chaya festival'],
    attractions: ['Talampaya National Park', 'Chilecito', 'Mirador del Portezuelo'],
    images: [' '],
    text3: 'La Rioja captivates visitors with its stunning desert landscapes, vibrant culture, and warm hospitality. From ancient geological formations to traditional festivals and world-class wines, La Rioja offers a diverse range of experiences for travelers seeking adventure and relaxation.'
  },
  {
    id: 12,
    key: '12',
    title: 'Chubut',
    text: 'Chubut is a province located in the southern region of Argentina, characterized by its dramatic coastline, pristine natural reserves, and abundant wildlife. You can explore the picturesque town of Puerto Madryn, observe the majestic Southern Right Whales in Peninsula Valdes, or venture into the rugged landscapes of the Los Alerces National Park.',
    activities: ['Witness the Southern Right Whales in Peninsula Valdes', 'Discover the Welsh heritage in Trelew and Gaiman', 'Explore the Los Alerces National Park'],
    attractions: ['Península Valdés', 'Puerto Madryn', 'Parque Nacional Los Alerces'],
    images: [''],
    text3: 'Chubut offers a unique blend of stunning natural beauty, marine wildlife encounters, and cultural heritage. With its diverse landscapes and activities, from whale watching to trekking, Chubut invites travelers to experience the untamed beauty of Patagonia in all its glory.'
  },
  {
    id: 13,
    key: '13',
    title: 'Santa Fe',
    text: 'Santa Fe is a province located in the central region of Argentina, known for its historical sites, vibrant urban centers, and picturesque river landscapes. You can explore the colonial architecture in Santa Fe city, visit the charming town of Rosario, or relax in the scenic islands of the Paraná Delta.',
    activities: ['Discover the historic Santa Fe city center', 'Visit the Rosario Monumento a la Bandera', 'Explore the Paraná Delta islands'],
    attractions: ['Rosario', 'Parque Nacional Pre-Delta', 'Santa Fe de la Vera Cruz'],
    images: [' '],
    text3: 'Santa Fe offers a blend of history, modernity, and natural beauty. With its charming cities, cultural events, and river landscapes, it provides a diverse range of experiences for travelers seeking to immerse themselves in Argentine culture and relax in serene surroundings.'
  },
  {
    id: 14,
    key: '14',
    title: 'Neuquén',
    text: 'Neuquén is a province located in the Patagonian region of Argentina, renowned for its stunning lakes, snow-capped mountains, and adventure sports. You can explore the picturesque city of San Martín de los Andes, visit the breathtaking Nahuel Huapi National Park, or indulge in outdoor activities such as skiing, trekking, and fishing.',
    activities: ['Ski in the Cerro Chapelco ski resort', 'Visit the Arrayanes Forest', 'Explore the Lanin National Park'],
    attractions: ['San Martín de los Andes', 'Villa La Angostura', 'Caviahue'],
    images: [' '],
    text3: 'Neuquén showcases the natural wonders of Patagonia, with its pristine lakes, towering mountains, and charming alpine towns. Whether you seek adrenaline-pumping adventures or tranquil moments in nature, Neuquén offers a captivating experience for outdoor enthusiasts and relaxation seekers alike.'
  },

  
];

export default function NewsPage() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };



  return (
    <div className="container">
      <div className="provinces-column">
        {data.map((destination) => (
          <div
className={`province ${selectedDestination === destination ? "active" : ""}`}
            key={destination.key}
            onClick={() => handleDestinationClick(destination)}
          >
            {destination.title}
          </div>
        ))}
      </div>
      <div className="info-column">
        {selectedDestination && (
          <div className="destination-info">
            <h2 className="dest-title">{selectedDestination.title}</h2>
            <div className="dest-info">
              <p className="text-dest">{selectedDestination.text}</p>
              <ul className="activities-list">
                {selectedDestination.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
              <ul className="attractions-list">
                {selectedDestination.attractions.map((attraction) => (
                  <li key={attraction}>{attraction}</li>
                ))}
              </ul>
              <p className="text-dest">{selectedDestination.text3}</p>
              {/* <ul className="attractions-list">
                {selectedDestination.images.map((image) => (
                  <img key={image} src={image} alt="Destination" />
                ))}
              </ul> */}
            </div>
            <div>
            <div className="Activities-must">
{homeImages.map(({ key,title, img }) => (
  <div key={key}>
    <div className="card-must-do">   
      <img src={img} className="Inner-img" alt={title} />
    </div>
  </div>
))}
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}