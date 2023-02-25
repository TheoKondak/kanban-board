import React from 'react';
import ListItem from './ListItem';

const List: React.FC<Card[]> = ({ cards }) => {
  return (
    <ul>
      {cards.map((card: Card, index: string) => {
        return <ListItem key={index} title={card.title} content={card.content} />;
      })}
    </ul>
  );
};

export default List;
