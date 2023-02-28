import { useState, useEffect } from 'react';

// Services
import kanbanService from './services/kanbanService';

// Components
import BaseModalWrapper from './components/modal/BaseModalWrapper';
import Root from './routes/root';
import ErrorPage from './routes/error-view';

// Router
import { Routes, Route, Outlet, Link, useLocation, useNavigate, useParams } from 'react-router-dom';

// Styling
import './App.css';

const App = () => {
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);

  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  const triggerTicketModal = () => {
    console.log('onClick={triggerTicketModal}');
    setIsTicketModalVisible((wasTicketModalVisible) => !wasTicketModalVisible);
  };

  return (
    <div className="App bg-[rgb(36,36,36)]  text-left mx-4 md:mx-10 md:my-4 p-y-10 w-full flex flex-column space-x-5 overflow-x-scroll overflow-y-hidden ">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Root triggerTicketModal={triggerTicketModal} />}>
          <Route path="/tickets/:id" element={<BaseModalWrapper onBackdropClick={triggerTicketModal} isTicketModalVisible={isTicketModalVisible} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/tickets/:id" element={<BaseModalWrapper onBackdropClick={triggerTicketModal} isTicketModalVisible={isTicketModalVisible} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
