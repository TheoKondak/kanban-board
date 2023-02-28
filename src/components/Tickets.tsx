import React from 'react';

// Components
import Ticket from './Ticket';

const Tickets: React.FC<Ticket[]> = ({ columnTickets, tickets, setTickets, triggerTicketModal }) => {
  const moveTicket = (id, columnId) => {
    const updatedTickets = tickets.map((ticket) => (ticket.id === id ? { ...ticket, columnId: columnId } : ticket));
    setTickets(updatedTickets);
  };

  return (
    <ul className={'w-full my-0 '}>
      {columnTickets.map((ticket: Ticket) => {
        return <Ticket ticketId={ticket.id} key={ticket.id.toString()} title={ticket.title} content={ticket.content} moveTicket={moveTicket} setTickets={setTickets} tickets={tickets} triggerTicketModal={triggerTicketModal} />;
      })}
    </ul>
  );
};

export default Tickets;
