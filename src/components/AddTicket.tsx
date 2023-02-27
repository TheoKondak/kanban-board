import React from 'react';
import { useState } from 'react';

import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import Button from './Button';

// Kanban Service
import kanbanService from '../services/kanbanService';

const TicketTitle = ({ clicked, setClicked, ticket, setTickets, tickets, columnId }) => {
  const [ticketTitle, setTicketTitle] = useState('Title');

  const handleChange = (e, setFn) => setFn(e.target.value);

  const handleSave = () => {
    // Create ticket object
    let newTicket: Ticket = {
      id: Math.max(...tickets.map((ticket) => ticket.id)) + 1,
      title: ticketTitle,
      content: '',
      columnId: columnId,
    };

    if (newTicket.title.length > 0) {
      // Sync Data to the server
      kanbanService.create('/tickets/', newTicket).then((newTicket) => {
        setTickets(tickets.concat(newTicket));
      });
    } else {
      setClicked(clicked ? false : true);
    }
  };

  return (
    <div className="bg-[rgb(56,56,56)] rounded p-2 mx-2 mb-2 ">
      <h4 className="text-sm">
        <EditText
          name="TicketTitle"
          value={ticketTitle}
          defaultValue="Title"
          onChange={(e) => handleChange(e, setTicketTitle)}
          onSave={() => {
            handleSave();
            setClicked(clicked ? false : true);
          }}
          onBlur={() => {
            setClicked(clicked ? false : true);
          }}
          onEditMode={() => {
            setTicketTitle('');
          }}
          className="bg-[rgb(56,56,56)]"
        />
      </h4>
    </div>
  );
};

const AddTicket = ({ columnId, tickets, setTickets }) => {
  const [ticket, setTicket] = useState('');
  const [clicked, setClicked] = useState(false);

  const onAddTicketClick = (clicked, setClicked) => {
    setClicked(clicked ? false : true);
  };

  return (
    <div className="w-full">
      {clicked ? (
        <TicketTitle clicked={clicked} setClicked={setClicked} ticket={ticket} setTickets={setTickets} tickets={tickets} columnId={columnId} />
      ) : (
        <Button
          text="Add New Ticket"
          onClick={() => {
            onAddTicketClick(clicked, setClicked);
          }}
        />
      )}
    </div>
  );
};

export default AddTicket;
