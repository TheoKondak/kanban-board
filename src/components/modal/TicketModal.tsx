import { useState } from 'react';

// Router
import { useParams, useNavigate, Navigate } from 'react-router-dom';

// Edit Text
import { EditText, EditTextarea } from 'react-edit-text';

// Icons
import { VscCloseAll, VscEdit, VscLink } from 'react-icons/vsc';

// Services
import kanbanService from '../../services/kanbanService';
import copyTextToClipboard from '../../helper/copyTextToClipboard';

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
      {tickets.length === 0 ? (
        // If the ticket Id is not found, redirect to the home directory
        <Navigate to="/" />
      ) : (
        <>
          <div className={`fixed inset-0 bg-primary-900/50 dark:bg-primary-900/70 ${isTicketModalVisible ? 'opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'}`} onClick={closeModal}></div>
          <div className={`fixed inset-8 md:inset-1/4  md:w-6/12 md:h-2/6 bg-primary-300 shadow-lg rounded-sm max-w-screen-sm h-5/6 md:h-3/6 px-4 py-2 ${isTicketModalVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="modalHeader relative">
              <button className="text-black bg-white absolute p-0 -top-6 -right-7" onClick={closeModal}>
                <VscCloseAll className="w-5 h-5" />
              </button>
            </div>

            <div className="">
              <div className="flex flex-row gap-4 justify-between items-center">
                <div className="flex flex-row items-center justify-start w-full">
                  <VscEdit className="text-primary-800 dark:text-primary-800" />
                  <h4 className="input-field flex-grow-1 w-full ml-0.5">{<EditText style={{ width: '100%', fontSize: '1rem', lineHeight: '1.2rem', fontWeight: '400', color: 'black', backgroundColor: 'transparent', display: 'inline-block', borderRadius: '4px', padding: '.5ch' }} inputClassName="modalEditTitle" classList="text-left text-xxs w-full " defaultValue={title} value={ticketTitle} onSave={() => handleTicketUpdate()} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, setTicketTitle)} />}</h4>
                </div>
                <button
                  className="text-black text-xs bg-white py-0.5 px-1 inline-block "
                  onClick={() => {
                    copyTextToClipboard(window.location.href);
                  }}>
                  {/* <span>copy link</span> */}
                  <VscLink className="inline-block w-4 h-4" />
                </button>
              </div>
              <hr className=" block mt-2 mb-3 text-primary-900" />

              <div>{<EditTextarea style={{ width: '100%', fontSize: '11px', color: 'black', fontWeight: '400', backgroundColor: 'rgba(230,230,230, 1)', padding: '4px', minHeight: '88px', borderRadius: '0.25rem' }} inputClassName="modalEditContent" classList="text-left text-xxs w-full shadow-lg" defaultValue={content} value={ticketContent} onSave={() => handleTicketUpdate()} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, setTicketContent)} />}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TicketModal;
