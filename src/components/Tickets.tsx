import React from 'react';

// Components
import Ticket from './Ticket';

// Helper
import generateId from '../helper/generateId';

const Tickets: React.FC<Ticket[]> = ({ tickets }) => {
  return (
    <ul className="w-full my-0">
      {tickets.map((ticket: Ticket) => {
        // const key = generateId(index.toString() + '_' + ticket.title.toString());
        return <Ticket id={ticket.id.toString()} key={ticket.id.toString()} title={ticket.title} content={ticket.content} />;
      })}
    </ul>
  );
};

export default Tickets;
