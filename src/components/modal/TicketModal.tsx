import React from 'react';
import ReactDom from 'react-dom';

import { VscCloseAll } from 'react-icons/vsc';

interface TicketModal {
  onBackdropClick: Function;
}

const TicketModal: React.FC<TicketModal> = ({ onBackdropClick, isTicketModalVisible, children }: Props) => {
  // console.log(onBackdropClick);
  return ReactDom.createPortal(
    <div>
      <div className={`fixed inset-0 bg-black ${isTicketModalVisible ? 'opacity-50 z-0' : 'pointer-events-none opacity-0'}`} onClick={onBackdropClick}></div>
      <div className={`fixed inset-1/4  w-6/12  h-2/3 bg-white text-black shadow-lg max-w-screen-sm p-4 ${isTicketModalVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="modalHeader relative h-5">
          <button className="text-white absolute right-0 -top-2 p-0" onClick={onBackdropClick}>
            <VscCloseAll />
          </button>
        </div>

        <div className="">
          <h4 className="">Some Title</h4>
          <hr className=" block my-2 " />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab blanditiis corporis accusamus asperiores odit voluptatibus illum assumenda atque sit? Qui fuga obcaecati officia, officiis hic magnam sequi fugiat ex quaerat id atque recusandae eaque voluptas quia dignissimos, nihil labore iusto reprehenderit? Fugiat praesentium vero dolores, ipsam ullam odit molestias quibusdam doloremque voluptas commodi ex. Similique deserunt distinctio nobis, sed neque consectetur repellendus vero aliquid fugit.</p>
        </div>
      </div>
    </div>,

    document.getElementById('ticket-modal')
  );
};

export default TicketModal;
