import React from 'react';

// Components
import Ticket from './Ticket';

// Helper
import generateId from '../helper/generateId';
import Loading from './Loading';

const Tickets: React.FC<Ticket[]> = ({ tickets }) => {
  return (
    <ul className={'w-full my-0 '}>
      {tickets.map((ticket: Ticket) => {
        // console.log(ticket);
        return <Ticket id={ticket.id.toString()} key={ticket.id.toString()} title={ticket.title} content={ticket.content} columnId={ticket.columnId} />;
      })}
    </ul>
  );
};

export default Tickets;
