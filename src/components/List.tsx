import React from 'react';
import ListItem from './ListItem';

type Props = {};

const List = ({}: Props) => {
  return (
    <ul>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default List;
