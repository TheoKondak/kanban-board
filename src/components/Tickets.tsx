import React from 'react';
import Ticket from './Ticket';

const Tickets: React.FC<Ticket[]> = ({ tickets }) => {
  return (
    <ul className="w-full my-0">
      {tickets.map((ticket: Ticket, index: string) => {
        return <Ticket key={index} title={ticket.title} content={ticket.content} />;
      })}
    </ul>
  );
};

export default Tickets;
