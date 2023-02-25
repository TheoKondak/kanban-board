import React from 'react';
import Ticket from './Ticket';

const Tickets: React.FC<Ticket[]> = ({ tickets }) => {
  return (
    <ul>
      {tickets.map((ticket: Ticket, index: string) => {
        return <Ticket key={index} title={ticket.title} content={ticket.content} />;
      })}
    </ul>
  );
};

export default Tickets;
