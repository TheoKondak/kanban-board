import React from 'react';
import { useDrag } from 'react-dnd';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Tickets: React.FC<Ticket> = ({ title, content }) => {
  const [{ isDragging }, drag, dragTicket] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'TICKET',
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

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
export default Tickets;
