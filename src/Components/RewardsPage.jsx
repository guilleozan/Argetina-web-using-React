import React from "react";
// import "./../styles/home.css";
import "./../styles/Rewards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const rewardsCards = [
  {
    key: "1",
    title: "TONGARIRO REWARDS MEMBERS",
    icon: 'bi bi-star',
    description: 'Save 10% on movie tickets*, Earn Points *, Free popcorn refills, Birthday rewards, Movie of the week tickets',
    variant:'warning',
    price:'FREE'
  },
  {
    key: "2",
    title: "TONGARIRO REWARDS VIP",
    icon: 'bi bi-gem',
    description:'Save  25% on movie tickets*, Save 10% on food & drinks, Earn double  Points^ ,Free popcorn refills~ ,Birthday rewards,Movie of the week tickets ',
    variant:'danger',
    price:'$14,99'
  },
]

export default function RewardsPage() {
  return (
    <div className="home r-page">
    
      {rewardsCards.map(card => (
        <Card className="reward-card" key={card.key} style={{ width: "18rem" }}>
          <Card.Title><i className={card.icon}></i></Card.Title>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              <ul>
          
                {card.description.split(",").map(item => (
                  <li key={item}>{item.trim()}</li>
                ))}
              </ul>
            </Card.Text>
            <Button variant={card.variant}><strong>{card.price}</strong></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
