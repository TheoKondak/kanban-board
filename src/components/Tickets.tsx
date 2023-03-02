// Components
import Ticket from './Ticket';

const Tickets: React.FC<Ticket[]> = ({ columnTickets, tickets, setTickets, triggerTicketModal, settings }) => {
  const moveTicket = (id, columnId) => {
    const updatedTickets = tickets.map((ticket) => (ticket.id === id ? { ...ticket, columnId: columnId } : ticket));
    setTickets(updatedTickets);
  };

  return (
    <ul className={'w-full my-0 overflow-x-auto '}>
      {columnTickets.map((ticket: Ticket) => {
        return <Ticket ticketId={ticket.id} key={ticket.id.toString()} title={ticket.title} content={ticket.content} moveTicket={moveTicket} setTickets={setTickets} tickets={tickets} triggerTicketModal={triggerTicketModal} settings={settings} />;
      })}
    </ul>
  );
};

export default Tickets;
