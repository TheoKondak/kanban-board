import React from 'react';

import { useDrag } from 'react-dnd';

import { Link, useLocation } from 'react-router-dom';

import 'react-edit-text/dist/index.css';

const Ticket: React.FC<Ticket> = ({ ticketId, title, content, columnId, setTickets, tickets, triggerTicketModal }) => {
  const moveTicket = (id, columnId) => {
    const updatedTickets = tickets.map((ticket) => (ticket.id === ticketId ? { ...ticket, columnId: columnId } : ticket));
    setTickets(updatedTickets);
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'TICKET',
    item: { id: ticketId, title: title, content: content, columnId: columnId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      item && dropResult && moveTicket(item.id, dropResult.item.columnId);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let location = useLocation();
  // console.log(location);
  return (
    <li className="bg-[rgb(36,36,36)] rounded p-2 mx-2 mb-2" ref={drag} onClick={triggerTicketModal}>
      <Link to={`ticket/${ticketId}`} state={{ backgroundLocation: location }}>
        <h4
          className="text-[14px] text-white leading-4 font-light pb-1
">
          {title}
        </h4>

        <div className="text-[9px] text-white font-light pb-2">{content}</div>
      </Link>
    </li>
  );
};
export default Ticket;
