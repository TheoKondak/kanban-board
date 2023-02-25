import React from 'react';

const ListItem: React.FC<Card> = ({ title, content }) => (
  <li>
    <h4>{title}</h4>
    <p>{content}</p>
  </li>
);
export default ListItem;
