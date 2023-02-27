import React from 'react';

import { useDrop } from 'react-dnd';

import Tickets from './Tickets';

const Column: React.FC<KanbanColumn> = ({ columnId, title, tickets, setTickets }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      // The type (or types) to accept - strings or symbols
      accept: 'TICKET',
      drop: (ticket, monitor) => ({
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
  const columnTickets = tickets.filter((ticket: Ticket) => columnId === ticket.columnId);

  return (
    <div ref={drop} className={`flex flex-col items-center flex-shrink-0 w-[270px]  bg-[rgb(46,46,46)] p-1 mx-2 my-2 md:my-0 rounded-lg ${isOver ? 'opacity-50' : 'opacity-100'}`}>
      <h3 className="text-xl my-2 py-0 capitalize">{title}</h3>
      <Tickets columnTickets={columnTickets} tickets={tickets} setTickets={setTickets} columnId={columnId} />
    </div>
  );
};

export default Column;
