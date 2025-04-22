import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CateringItems from './pages/CateringItems';
import StationeryItems from './pages/StationeryItems';
import MovieTickets from './pages/MovieTickets';
import BeautySalon from './pages/BeautySalon';
import FitnessCenter from './pages/FitnessCenter';
import PartyHall from './pages/PartyHall';
import Profile from './pages/Profile';
import ConfirmationModal from './components/ConfirmationModal.jsx';
import { CartProvider } from './context/CartContext';
import './index.css';
import './VoyagerApp.css'

function VoyagerApp() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {}
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const showConfirmation = (title, message, onConfirm) => {
    setConfirmationModal({
      isOpen: true,
      title,
      message,
      onConfirm
    });
  };

  const closeConfirmation = () => {
    setConfirmationModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
      <CartProvider>
        <div className="voyager-dashboard">
        <div className="app-container">
          <Sidebar collapsed={sidebarCollapsed} />
          <div className={`content-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <Header toggleSidebar={toggleSidebar} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/catering" element={<CateringItems showConfirmation={showConfirmation} />} />
                <Route path="/stationery" element={<StationeryItems showConfirmation={showConfirmation} />} />
                <Route path="/movies" element={<MovieTickets showConfirmation={showConfirmation} />} />
                <Route path="/beauty" element={<BeautySalon showConfirmation={showConfirmation} />} />
                <Route path="/fitness" element={<FitnessCenter showConfirmation={showConfirmation} />} />
                <Route path="/party" element={<PartyHall showConfirmation={showConfirmation} />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
          <ConfirmationModal
            isOpen={confirmationModal.isOpen}
            title={confirmationModal.title}
            message={confirmationModal.message}
            onConfirm={confirmationModal.onConfirm}
            onClose={closeConfirmation}
          />
        </div>
        </div>
      </CartProvider>
  );
}

export default VoyagerApp;