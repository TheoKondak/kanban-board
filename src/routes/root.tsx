// DND
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

// Router
import { Outlet } from 'react-router-dom';

// Components
import Loading from '../components/Loading';
import Column from '../components/Column';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Helpers
import detectTouch from '../helper/detectTouch';

// CSS
import '../App.css';

const Root: React.FC<Root> = ({ triggerTicketModal, kanbanColumns, tickets, setTickets, settings }) => {
  // Load conditionally DND backend depending whether the device has touch or not.
  // WARNING: while testing, if you change the touch behavior in developer tools, you will have to refresh the tab to jump between touch and mouse events.
  const backend = detectTouch() ? TouchBackend : HTML5Backend;
  const dndProviderOptions = detectTouch() ? { enableTouchEvents: true } : {};

  return (
    <div className="h-screen flex flex-col  ">
      {/* {settings ? <Header logo={settings.kanban.logo} /> : <Loading />} */}

      <Header logo={settings.kanban.logo} />

      <div className="text-left md:my-4 mx-1 lg:mx-10 px-2 md:px-0 w-full flex md:justify-center md:gap-5 overflow-x-auto overflow-y-hidden ">
        {/* Provides the Drag and Drop capability */}

        <DndProvider backend={backend} options={dndProviderOptions}>
          {kanbanColumns ? (
            kanbanColumns.map((kanbanColumn: KanbanColumn) => {
              return <Column key={kanbanColumn.id.toString()} columnId={kanbanColumn.id} title={kanbanColumn.title} tickets={tickets} setTickets={setTickets} triggerTicketModal={triggerTicketModal} settings={settings} />;
            })
          ) : (
            <Loading />
          )}

          <div className="outlet">
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
