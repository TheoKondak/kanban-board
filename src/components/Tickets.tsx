import React from 'react';
import { useState } from 'react';

import { useDrop } from 'react-dnd';

// Components
import Ticket from './Ticket';

// Helper
import generateId from '../helper/generateId';

const Tickets: React.FC<Ticket[]> = ({ tickets, kanbanData }) => {
  const [localKanbanData, setLocalKanbanData] = useState(kanbanData);

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      // The type (or types) to accept - strings or symbols
      accept: 'TICKET',
      drop: (item, monitor) => ({
        item: console.log(item),
      }),
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    ['move']
  );

  // console.log(dropResults);

  return (
    <ul className={`w-full my-0 ${isOver ? 'opacity-50' : 'opacity-100'}`} ref={drop}>
      {tickets.map((ticket: Ticket) => {
        // const key = generateId(index.toString() + '_' + ticket.title.toString());
        return <Ticket id={ticket.id.toString()} key={ticket.id.toString()} title={ticket.title} content={ticket.content} />;
      })}
    </ul>
  );
};

export default Tickets;
