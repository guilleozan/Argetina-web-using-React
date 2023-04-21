import React from 'react';
import Card from "react-bootstrap/Card";
import "./../styles/home.css";


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


export default function Cards() {
  return (
    <div>


<div className="contenedor-gral-card">
      {cardMovies.map(
        ({ key, title, img, director, cast, duration, genre, genre2 }) => (
          <div key={key} className="container-card">
            {/* image card */}
            <Card
              style={{
                width: "10rem",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Card.Img
                style={{ borderRadius: "15px" }}
                variant="top"
                src={img}
              />
            </Card>
            {/* end img */}

            {/* Title card */}
            <Card bg="transparent" style={{ width: "19rem", border: "none" }}>
              <Card.Body
                style={{
                  display: "grid",
                  gridTemplateRows: "auto auto 1fr auto auto",
                }}
              >
                <div style={{ gridRow: "1 / 2", paddingBottom: "10px" }}>
                  <Card.Title
                    style={{
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "20px",
                    }}
                  >
                    {title}
                  </Card.Title>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gridRow: "2 / 3",
                    gap: "10px",
                  }}
                >
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{
                      border: "1px solid white",
                      borderRadius: "20px",
                      padding: "2px",
                      color: "white",
                    }}
                  >
                    {genre2}
                  </Card.Subtitle>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{
                      border: "1px solid white",
                      borderRadius: "20px",
                      padding: "2px",
                      color: "white",
                    }}
                  >
                    {genre}
                  </Card.Subtitle>
                </div>
                <div style={{ gridRow: "3 / 4" }}>
                  <Card.Text
                    style={{
                      color: "white",
                      textAlign: "justify",
                    }}
                  >
                    Director: {director} <br />
                    Cast: {cast} <br />
                    Duration: {duration} <br />
                  </Card.Text>
                </div>
              
                <div style={{ gridRow: "4 / 5" }}>
                  <br/>
                  <Card.Link
                    href="#"
                    style={{
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "20px",
                      padding:'10px',
                      margin:'10px',
                    }}
                  >
                    Card Link
                  </Card.Link>
                  <Card.Link
                    href="#"
                    style={{
                      color: "white",
                    }}
                  >
                    Another Link
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      )}
      </div>
      
    </div>
  )
}
