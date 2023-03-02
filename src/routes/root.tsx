// DND
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Router
import { Outlet } from 'react-router-dom';

// Components
import Loading from '../components/Loading';
import Column from '../components/Column';
import Header from '../components/Header';
import Footer from '../components/Footer';

// CSS
import '../App.css';

const Root: React.FC<Root> = ({ triggerTicketModal, kanbanColumns, tickets, setTickets, settings }) => {
  return (
    <div>
      {settings ? <Header logo={settings.kanban.logo} /> : <Loading />}

      <div className="bg-[rgb(36,36,36)]  text-left mx-4 md:mx-10 md:my-4 p-y-10 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden ">
        {/* Provides the Drag and Drop capability */}
        <DndProvider backend={HTML5Backend}>
          {kanbanColumns ? (
            kanbanColumns.map((kanbanColumn: KanbanColumn) => {
              return <Column key={kanbanColumn.id.toString()} columnId={kanbanColumn.id} title={kanbanColumn.title} tickets={tickets} setTickets={setTickets} triggerTicketModal={triggerTicketModal} settings={settings} />;
            })
          ) : (
            <Loading />
          )}

          <div>
            {/* Where Ticket modal will appear */}
            <Outlet />
          </div>
        </DndProvider>
      </div>
      {settings ? <Footer settings={settings.kanban.footer} /> : <Loading />}
    </div>
  );
};

export default Root;
