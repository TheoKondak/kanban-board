import React from 'react';
import List from './List';

const Column: React.FC<KanbanColumn[]> = ({ title, cards }) => {
  // console.log(cards);
  return (
    <div>
      <h3>{title}</h3>
      <List cards={cards} />
    </div>
  );
};

export default Column;
