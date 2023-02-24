import React from 'react';
import ListItem from './ListItem';

interface Props {
  cards: {
    title: string;
    content: string;
  }[];
}
const List: React.FC<Card[]> = ({ cards }) => {
  console.log(cards);
  return (
    <ul>
      {cards.map((card: Card, index: string) => (
        <ListItem key={index} title={card.title.toString()} content={card.content} />
      ))}
    </ul>
  );
};

export default List;
