import { useState } from 'react';

// Router
import { useParams, useNavigate, Navigate } from 'react-router-dom';

// Edit Text
import { EditText, EditTextarea } from 'react-edit-text';

// Icons
import { VscCloseAll } from 'react-icons/vsc';

// Services
import kanbanService from '../../services/kanbanService';

const TicketModal: React.FC<TicketModal> = ({ onBackdropClick, isTicketModalVisible, tickets, reFetch, settings }) => {
  let navigate = useNavigate();
  let { ticketId } = useParams();

  const ticket: [Ticket] = tickets.filter((ticket) => ticket.id === Number(ticketId));
  const [{ id, columnId, title, content }] = ticket;
  const [ticketTitle, setTicketTitle] = useState(title);
  const [ticketContent, setTicketContent] = useState(content);

  // When closing the modal, close the modal and navigate to the previous directory
  const closeModal = () => {
    onBackdropClick();
    navigate(-1);
    (title != ticketTitle || content != ticketContent) && reFetch();
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>, setFn: Function) => setFn(e.target.value);

  const handleTicketUpdate = () => {
    // Create ticket object
    const updatedTicket: Ticket = {
      id: id,
      columnId: columnId,
      title: ticketTitle,
      content: ticketContent,
    };

    console.log(updatedTicket);

    if (updatedTicket.title.length > 0) {
      // Sync Data to the server
      kanbanService.update(`tickets/${id}`, updatedTicket).then((updatedTicket) => {
        setTicketTitle(ticketTitle);
        setTicketContent(ticketContent);
      });
    } else {
      setTicketTitle(ticketTitle);
      alert('Ticket Title cannot be empty');
    }
  };
  return (
    <>
      {ticket.length === 0 ? (
        // If the ticket Id is not found, redirect to the home directory
        <Navigate to="/" />
      ) : (
        <>
          <div className={`fixed inset-0 bg-black ${isTicketModalVisible ? 'opacity-50 z-0' : 'pointer-events-none opacity-0'}`} onClick={closeModal}></div>
          <div className={`fixed inset-1/4  w-6/12  h-2/3 bg-white text-black shadow-lg max-w-screen-sm p-4 ${isTicketModalVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="modalHeader relative h-5">
              <button className="text-white absolute right-0 -top-2 p-0" onClick={closeModal}>
                <VscCloseAll />
              </button>
            </div>

            <div className="">
              <h4 className="">{<EditText defaultValue={title} value={ticketTitle} onSave={() => handleTicketUpdate()} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, setTicketTitle)} />}</h4>
              <hr className=" block my-2 " />
              <div>{<EditTextarea defaultValue={content} value={ticketContent} onSave={() => handleTicketUpdate()} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, setTicketContent)} />}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TicketModal;
