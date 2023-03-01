// Router
import { useParams, useNavigate, Navigate } from 'react-router-dom';

// Edit Text
import { EditText, EditTextarea } from 'react-edit-text';

// Icons
import { VscCloseAll } from 'react-icons/vsc';

const TicketModal: React.FC<TicketModal> = ({ onBackdropClick, isTicketModalVisible, tickets }) => {
  let navigate = useNavigate();
  let { ticketId } = useParams();

  const ticket: [Ticket] = tickets.filter((ticket) => ticket.id === Number(ticketId));
  // When closing the modal, close the modal and navigate to the previous directory
  const closeModal = () => {
    onBackdropClick();
    navigate(-1);
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
              <h4 className="">{<EditText defaultValue={ticket[0].title} />}</h4>
              <hr className=" block my-2 " />
              <div>{<EditTextarea defaultValue={ticket[0].content} />}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TicketModal;
