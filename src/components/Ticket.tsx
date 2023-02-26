import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Tickets: React.FC<Ticket> = ({ title, content }) => (
  <li className="bg-[rgb(36,36,36)] rounded p-2 mx-2 mb-2">
    <h4
      className="text-md  leading-4 font-light pb-1
    ">
      {/* <EditText defaultValue={title} /> */}
      {title}
    </h4>

    <div className="text-sm font-light pb-2">
      {/* <EditTextarea defaultValue={content} /> */}
      {content}
    </div>
  </li>
);
export default Tickets;
