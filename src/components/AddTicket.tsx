import { useState } from 'react';

import { EditText, EditTextarea } from 'react-edit-text';
import Button from './Button';

// Kanban Service
import kanbanService from '../services/kanbanService';

// import 'react-edit-text/dist/index.css';

const TicketTitle: React.FC<TicketTitle> = ({ clicked, setClicked, setTickets, tickets, columnId }) => {
  const [ticketTitle, setTicketTitle] = useState('Title');

  const handleChange = (e: React.FormEvent<HTMLInputElement>, setFn: Function) => setFn(e.target.value);

  const handleSave = () => {
    // Create ticket object
    let newTicket: Ticket = {
      id: Math.max(...(tickets.map((ticket: Ticket) => ticket.id) as [])) + 1,
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
    <div className="bg-primary-800 rounded mx-2 mb-2 flex flex-col items-center justify-start ">
      <h4 className="w-full text-left text-xxs p-2">
        <EditText
          name="TicketTitle"
          value={ticketTitle}
          defaultValue="Title"
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, setTicketTitle)}
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
          className="pl-1 text-xxs leading-5 w-full rounded-none active:rounded-none focus:rounded-none block border-transparent active:border-transparent focus:border-transparent hover:shadow-lg hover:bg-primary-800"
          // The textfield on click has an input element, that is not accessible from the JS side. The documentation is not clear on how to handle it, so I have added the input field css on App.css selector: [name='TicketTitle']
        />
      </h4>
    </div>
  );
};

const AddTicket: React.FC<AddTicket> = ({ columnId, tickets, setTickets, settings }) => {
  const [clicked, setClicked] = useState(false);

  const onAddTicketClick = (clicked: Boolean, setClicked: Function) => {
    setClicked(clicked ? false : true);
  };

  return (
    <div className="w-full ">
      {clicked ? (
        <TicketTitle clicked={clicked} setClicked={setClicked} setTickets={setTickets} tickets={tickets} columnId={columnId} />
      ) : (
        <div className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-800 dark:hover:bg-primary-700 rounded mx-2 mb-2 flex flex-col items-center justify-center">
          <Button
            text="Add New Ticket"
            onClick={() => {
              onAddTicketClick(clicked, setClicked);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddTicket;
