// DND
import { useDrag } from 'react-dnd';

// Router
import { Link, useLocation } from 'react-router-dom';

// Services
import kanbanService from '../services/kanbanService';

// import 'react-edit-text/dist/index.css';

const Ticket: React.FC<Ticket> = ({ ticketId, title, content, columnId, setTickets, tickets, triggerTicketModal, settings }) => {
  // Drag and Drop
  const moveTicket = (item, columnId) => {
    const updatedTickets = tickets.map((ticket) => (ticket.id === ticketId ? { ...ticket, columnId: columnId } : ticket));
    kanbanService.update(`tickets/${ticketId}`, { ...item, columnId: columnId }).then(() => {
      setTickets(updatedTickets);
    });
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'TICKET',
    item: { id: ticketId, title: title, content: content, columnId: columnId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      item && dropResult && moveTicket(item, dropResult.item.columnId);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Router
  let location = useLocation();

  return (
    <li className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-800 dark:hover:bg-primary-700 rounded p-2 mx-2 mb-2 hover:shadow-lg" ref={drag} onClick={triggerTicketModal}>
      <Link to={`ticket/${ticketId}`} state={{ backgroundLocation: location }}>
        <h4
          className="text-xs font-medium text-white leading-4 font-light pb-1
">
          {title}
        </h4>

        <div className="text-xxxs text-white font-light pb-2">{content.length > settings.tickets.ticketPreviewLength ? `${content.substring(0, settings.tickets.ticketPreviewLength)}...` : content}</div>
      </Link>
    </li>
  );
};
export default Ticket;
