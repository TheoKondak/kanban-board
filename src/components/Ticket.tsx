import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Tickets: React.FC<Ticket> = ({ title, content }) => (
  <li>
    <h4>
      <EditText defaultValue={title} />
    </h4>

    <EditTextarea defaultValue={content} />
  </li>
);
export default Tickets;
