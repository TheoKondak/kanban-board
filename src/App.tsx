import { useState, useEffect } from 'react';

// Services
import kanbanService from './services/kanbanService';

// Components
import Loading from './components/Loading';
import Column from './components/Column';

// Styling
import './App.css';

const App = () => {
  const [kanbanColumns, setKanbanColumns] = useState<KanbanColumn[] | null>(null);

  useEffect(() => {
    kanbanService.getAll().then((initialKanbanColumns) => setKanbanColumns(initialKanbanColumns));
  }, []);

  const generateId = (data: string) => `${data}_${new Date().getTime()}`;

  return (
    <div className="App">
      {kanbanColumns ? (
        kanbanColumns.map((kanbanColumn: KanbanColumn, index: number) => {
          const key: string = generateId(index.toString() + '_' + kanbanColumn.title.toString());
          return <Column key={key} title={kanbanColumn.title} tickets={kanbanColumn.tickets} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
