import { useState, useEffect } from 'react';

// Services
import kanbanService from './services/kanbanService';

// Components
import Loading from './components/Loading';
import Column from './components/Column';

// DND
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Styling
import './App.css';

const App = () => {
  const [kanbanColumns, setKanbanColumns] = useState<KanbanColumn[] | null>(null);

  useEffect(() => {
    kanbanService.getAll().then((initialKanbanColumns) => setKanbanColumns(initialKanbanColumns));
  }, []);

  return (
    <div className="App bg-[rgb(36,36,36)]  text-left mx-4 md:mx-10 md:my-4 p-y-10 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden ">
      <DndProvider backend={HTML5Backend}>
        {kanbanColumns ? (
          kanbanColumns.map((kanbanColumn: KanbanColumn, index: number) => {
            // const key: string = generateId(index.toString() + '_' + kanbanColumn.title.toString());
            return <Column key={kanbanColumn.id.toString()} id={kanbanColumn.id.toString()} title={kanbanColumn.title} tickets={kanbanColumn.tickets} kanbanData={kanbanColumns} />;
          })
        ) : (
          <Loading />
        )}
      </DndProvider>
    </div>
  );
};

export default App;
