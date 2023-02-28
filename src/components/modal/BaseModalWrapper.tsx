import React from 'react';

import TicketModal from './TicketModal';

interface BaseModalWrapper {
  onBackdropClick: Function;
  isTicketModalVisible: boolean;
}

const BaseModalWrapper: React.FC<BaseModalWrapper> = ({ onBackdropClick, isTicketModalVisible }) => {
  return (
    <div className={`fixed inset-0 ${isTicketModalVisible ? '' : 'pointer-events-none'}`}>
      <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={isTicketModalVisible} />
    </div>
  );
};

export default BaseModalWrapper;
