import React from 'react';
import Tickets from './Tickets';

const Column: React.FC<KanbanColumn> = ({ title, tickets }) => {
  // console.log(tickets);
  return (
    <div className={'flex flex-col items-center flex-shrink-0 w-[270px]  bg-[rgb(46,46,46)] p-1 mx-2 my-2 md:my-0 rounded-lg'}>
      <h3 className="text-xl my-2 py-0 capitalize">{title}</h3>
      <Tickets tickets={tickets} />
    </div>
  );
};

export default Column;
