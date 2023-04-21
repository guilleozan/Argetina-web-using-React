import React from "react";
import "./../styles/home.css";
import { motion } from "framer-motion";
import Cards from "../reusable-components/Cards";



const cardMovies = [
  {
    key: "1",
    title: "Top Gun",
    img: "https://www.themoviedb.org/t/p/original/jeGvNOVMs5QIU1VaoGvnd3gSv0G.jpg",
    director: "Joseph Kosinski",
    cast: "Tom Cruise,Miles Teller ",
    duration: "2hs 11m",
    genre: "Action",
    genre2: "Drama",
  },
  {
    key: "2",
    title: "Avatar",
    img: "https://www.themoviedb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldaña",
    duration: "3h 12m",
    genre: "fantasy",
    genre2: "Action",
  },
  {
    key: "3",
    title: "Creed 3",
    img: "https://www.themoviedb.org/t/p/original/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    director: "Michael B. Jordan",
    cast: "Tessa Thompson, Michael B. Jordan",
    duration: "1h 56m",
    genre: "Action",
    genre2: "Violence",
  },
  {
    key: "4",
    title: "The whale",
    img: "https://www.themoviedb.org/t/p/original/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
    director: "Darren Aronofsky",
    cast: "Brendan Fraser, Sadie Sink",
    duration: "1h 56m",
    genre: "Drama",
    genre2: "",
  },
  {
    key: "5",
    title: "Jurassic World Dominion ",
    img: "https://www.themoviedb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    director: "Colin Trevorrow",
    cast: "Chris Pratt,  Bryce Dallas Howard  ",
    duration: "1h 45m",
    genre: "Action",
    genre2: "Adventure",
  },
  {
    key: "6",
    title: "Everything Everywhere All at Once ",
    img: "https://www.themoviedb.org/t/p/original/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    director: "Daniel Kwan",
    cast: "Michelle Yeoh, Ke Huy Quan",
    duration: "2h 20m",
    genre: "Action",
    genre2: "Adventure",
  },
];

const HomePage = (props) => {
  return (
    <div className="home">
      <h1>
        <strong>STREAMING NOW</strong>
      </h1>
      <br />
      {/* This will be the slider front page
      here will be the code for a carusel with images sliding both ways */}
      <div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 100, left: -705 }}
        >
          {cardMovies.map(({ key, title, img }) => (
            <motion.div key={key} className="item">
              <img src={img} alt={title} className="image" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <br/><br/><br/>

      {/*End of the code slider/ carusel images showing now */}

      {/* Movie cars containing Movie, image and detalis of the movie card 
      that will be render in different pages,  */}

      <Cards/>
    </div>
  );
};

export default HomePage;

// tutorial to try to conect all this information via API
// https://www.youtube.com/watch?v=-6xXuSmBox4
