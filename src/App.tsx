import { useState, useEffect } from 'react';

// Services
import kanbanService from './services/kanbanService';

// Components
import Loading from './components/Loading';
import Column from './components/Column';

// Helpers
import generateId from './helper/generateId';

// Styling
import './App.css';

const App = () => {
  const [kanbanColumns, setKanbanColumns] = useState<KanbanColumn[] | null>(null);

  useEffect(() => {
    kanbanService.getAll().then((initialKanbanColumns) => setKanbanColumns(initialKanbanColumns));
  }, []);

  return (
    <div className="App bg-[rgb(36,36,36)]  text-left mx-4 md:mx-10 md:my-4 p-y-10 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden ">
      {kanbanColumns ? (
        kanbanColumns.map((kanbanColumn: KanbanColumn, index: number) => {
          const key: string = generateId(index.toString() + '_' + kanbanColumn.title.toString());
          return <Column key={key} id={key} title={kanbanColumn.title} tickets={kanbanColumn.tickets} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
