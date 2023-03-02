import TicketModal from './TicketModal';

const BaseModalWrapper: React.FC<BaseModalWrapper> = ({ onBackdropClick, isTicketModalVisible, tickets, reFetch, settings }) => {
  return (
    <div className={`fixed inset-0 ${isTicketModalVisible ? '' : 'pointer-events-none'}`}>
      <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={isTicketModalVisible} tickets={tickets} reFetch={reFetch} settings={settings} />
    </div>
  );
};

export default BaseModalWrapper;
