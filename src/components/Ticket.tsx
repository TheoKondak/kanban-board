import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Tickets: React.FC<Ticket> = ({ title, content }) => (
  <li className="bg-[rgb(36,36,36)] rounded p-2 mx-2 mb-2">
    <h4
      className="text-lg pb-0 leading-4
    ">
      <EditText defaultValue={title} />
    </h4>

    <div className="text-sm">
      <EditTextarea defaultValue={content} />
    </div>
  </li>
);
export default Tickets;
