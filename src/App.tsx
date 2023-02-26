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
  const [kanban, setKanban] = useState<Kanban[] | null>(null);

  useEffect(() => {
    kanbanService.getAll().then((kanban) => setKanban(kanban));
  }, []);

  return (
    <div className="App bg-[rgb(36,36,36)]  text-left mx-4 md:mx-10 md:my-4 p-y-10 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden ">
      <DndProvider backend={HTML5Backend}>
        {kanban ? (
          kanban.columns.map((kanbanColumn: KanbanColumn) => {
            return <Column key={kanbanColumn.id.toString()} id={kanbanColumn.id.toString()} title={kanbanColumn.title} tickets={kanban.tickets} />;
          })
        ) : (
          <Loading />
        )}
      </DndProvider>
    </div>
  );
};

export default App;
