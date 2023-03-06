// Components
import Ticket from './Ticket';

const Tickets: React.FC<Ticket[]> = ({ columnTickets, tickets, setTickets, triggerTicketModal, settings }) => {
  const moveTicket = (id, columnId) => {
    const updatedTickets = tickets.map((ticket) => (ticket.id === id ? { ...ticket, columnId: columnId } : ticket));
    setTickets(updatedTickets);
  };

  console.log(columnTickets);
  return (
    <div>
      {columnTickets.length > 0 ? (
        <ul className={'tickets w-full my-0 overflow-x-auto '}>
          {columnTickets.map((ticket: Ticket) => {
            return <Ticket ticketId={ticket.id} key={ticket.id.toString()} title={ticket.title} content={ticket.content} moveTicket={moveTicket} setTickets={setTickets} tickets={tickets} triggerTicketModal={triggerTicketModal} settings={settings} />;
          })}
        </ul>
      ) : (
        <div className="no-tickets bg-primary-500 dark:bg-primary-700 rounded p-4 mx-2 mb-2 text-sm text-center text-white font-thin ">No tickets in this column</div>
      )}
    </div>
  );
};

export default Tickets;
