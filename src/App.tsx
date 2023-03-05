import { useState, useEffect } from 'react';

// Router
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Services
import kanbanService from './services/kanbanService';

// Components
import BaseModalWrapper from './components/modal/BaseModalWrapper';
import Root from './routes/root';
import Loading from './components/Loading';

// Styling
import './App.css';

const App = () => {
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);
  const [kanbanColumns, setKanbanColumns] = useState<KanbanColumn[] | null>(null);
  const [tickets, setTickets] = useState<Tickets | null>(null);
  const [fetch, setFetch] = useState(false);
  const [settings, setSettings] = useState(null);
  console.log(typeof kanbanService.get);
  // Get the API Data
  useEffect(() => {
    kanbanService.get('/columns').then((columns) => {
      setKanbanColumns(columns);
    });
    kanbanService.get('/settings').then((receivedSettings) => {
      setSettings(receivedSettings);
    });
  }, []);

  useEffect(() => {
    kanbanService.get('/tickets').then((tickets) => {
      setTickets(tickets);
    });
  }, [fetch]);

  // Router
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  // Handle Opening the Modal when someone visits an existing ticket directly via the URL. If the ticket does not exist, the redirect is being handled elsewhere.
  useEffect(() => {
    const regex = new RegExp(/^\/ticket\/\d+$/);
    location.pathname.match(regex) && setIsTicketModalVisible(true);
  }, [location]);

  // Refetch data
  const reFetch: Function = () => {
    setFetch(!fetch);
  };

  // Trigger the Modal
  const triggerTicketModal = () => {
    setIsTicketModalVisible((wasTicketModalVisible) => !wasTicketModalVisible);
  };

  return (
    <div className="App h-screen overflow-hidden bg-primary-200 dark:bg-primary-800">
      <h1>Modal Example</h1>
      {tickets ? (
        <div className="kanban h-screen">
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<Root triggerTicketModal={triggerTicketModal} kanbanColumns={kanbanColumns} tickets={tickets} setTickets={setTickets} settings={settings} />}>
              <Route path="ticket/:ticketId" element={<BaseModalWrapper onBackdropClick={triggerTicketModal} isTicketModalVisible={isTicketModalVisible} tickets={tickets} reFetch={reFetch} settings={settings} />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
          {state?.backgroundLocation && (
            <Routes>
              <Route path="ticket/:ticketId" element={<BaseModalWrapper onBackdropClick={triggerTicketModal} isTicketModalVisible={isTicketModalVisible} tickets={tickets} reFetch={reFetch} settings={settings} />} />
            </Routes>
          )}
        </div>
      ) : (
        <div className="loading-app w-full h-full flex items-center justify-center">
          <Loading type="spin" color="black" />
        </div>
      )}
    </div>
  );
};

export default App;
