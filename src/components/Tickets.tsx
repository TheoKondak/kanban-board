import React from 'react';

// Components
import Ticket from './Ticket';

// Helper
import generateId from '../helper/generateId';

const Tickets: React.FC<Ticket[]> = ({ tickets }) => {
  return (
    <ul className="w-full my-0">
      {tickets.map((ticket: Ticket, index: string) => {
        const key = generateId(index.toString() + '_' + ticket.title.toString());
        return <Ticket id={key} key={key} title={ticket.title} content={ticket.content} />;
      })}
    </ul>
  );
};

export default Tickets;
