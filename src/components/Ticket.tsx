import React from 'react';
import 'react-edit-text/dist/index.css';

const Tickets: React.FC<Ticket> = ({ title, content }) => (
  <li>
    <h4>{title}</h4>

    <p>{content}</p>
  </li>
);
export default Tickets;
