import React from 'react';
import Tickets from './Tickets';

const Column: React.FC<KanbanColumn> = ({ title, tickets }) => {
  // console.log(tickets);
  return (
    <div>
      <h3>{title}</h3>
      <Tickets tickets={tickets} />
    </div>
  );
};

export default Column;
