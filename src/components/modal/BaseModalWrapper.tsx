import React from 'react';

import TicketModal from './TicketModal';

import { useParams } from 'react-router-dom';

interface BaseModalWrapper {
  onBackdropClick: Function;
  isTicketModalVisible: boolean;
}

const BaseModalWrapper: React.FC<BaseModalWrapper> = ({ onBackdropClick, isTicketModalVisible, tickets, reFetch }) => {
  return (
    <div className={`fixed inset-0 ${isTicketModalVisible ? '' : 'pointer-events-none'}`}>
      <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={isTicketModalVisible} tickets={tickets} reFetch={reFetch} />
    </div>
  );
};

export default BaseModalWrapper;
