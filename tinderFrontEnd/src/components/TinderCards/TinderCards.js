import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

import './style.scss';

const TinderCards = () => {
  const [cardContent, setCardContent] = useState([
    {
      name: 'girl1',
      url: '../assets/girl1.jpg',
    }, {
      name: 'girl2',
      url: '../assets/girl2.jpg',
    }, {
      name: 'dog1',
      url: '../assets/dog1.jpg',
    }, {
      name: 'kid1',
      url: '../assets/kid1.jpg',
    }
  ]);

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
            <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>

        ))}
      </div>
    </div>
  );
};

export default TinderCards;