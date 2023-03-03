// DND
import { useDrop } from 'react-dnd';

// Components
import AddTicket from './AddTicket';
import Loading from './Loading';
import Tickets from './Tickets';

const Column: React.FC<Column> = ({ columnId, title, tickets, setTickets, triggerTicketModal, settings }) => {
  // DND Functionality
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      // The type (or types) to accept - strings or symbols
      accept: 'TICKET',
      drop: (ticket: Ticket, monitor) => ({
        item: { ...ticket, columnId: columnId },
      }),
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    ['move']
  );

  return (
    <div ref={drop} className={`flex flex-col items-center flex-shrink-0 w-[270px]  bg-primary-300 dark:bg-primary-600 p-1 pb-3 mx-2 my-2 md:my-0 rounded-md ${isOver ? 'opacity-50' : 'opacity-100'} drop-shadow-sm`}>
      <h3 className="text-md text-left text-primary-800 dark:text-white w-full my-2 mt-1 py-0 pl-2 capitalize">{title}</h3>
      <AddTicket columnId={columnId} tickets={tickets} setTickets={setTickets} settings={settings} />

      <div className="overflow-y-auto w-full h-auto">{tickets ? <Tickets columnTickets={tickets.filter((ticket: Ticket) => columnId === ticket.columnId)} tickets={tickets} setTickets={setTickets} columnId={columnId} triggerTicketModal={triggerTicketModal} settings={settings} /> : <Loading />}</div>
    </div>
  );
};

export default Column;
