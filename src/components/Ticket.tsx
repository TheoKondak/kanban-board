import React from 'react';
import { useState } from 'react';

import { useDrag } from 'react-dnd';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Ticket: React.FC<Ticket> = ({ ticketId, title, content, columnId, setTickets, tickets }) => {
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

  return (
    <li className="bg-[rgb(36,36,36)] rounded p-2 mx-2 mb-2" ref={drag}>
      <h4
        className="text-md  leading-4 font-light pb-1
    ">
        {/* <EditText defaultValue={title} /> */}
        {title}
      </h4>

      <div className="text-sm font-light pb-2">
        {/* <EditTextarea defaultValue={content} /> */}
        {content}
      </div>
    </li>
  );
};
export default Ticket;
