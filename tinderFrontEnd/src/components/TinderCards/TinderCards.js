import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import './style.scss';
//import instance from '../axios/axios';

const TinderCards = () => {
  const [cardContent, setCardContent] = useState([]);

  const url = 'http://localhost:8001/tinder/cards';

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get(url);
        setCardContent(req.data);
      } catch (error) {
        console.log(error);
      }

    }
    fetchData();
  }, []);
  console.log(cardContent);

  const swiped = (dir, direction) => {
    console.log('You swiped: ' + direction);
  };

  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <div className='tinder__cards'>

      <div className='tinderCards__cardsContainer'>
        {cardContent.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['right', 'left']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgURL})` }} className='card'>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>

        ))}
      </div>
    </div>
  );
};

export default TinderCards;