import { Link, useLocation } from 'react-router-dom';
import { Home, Scissors, Dumbbell, PartyPopper, User, LogOut, Utensils, NotebookPen, Clapperboard } from 'lucide-react';

const Sidebar = ({ collapsed }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/voyager/" className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" stroke="#FF4D79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20" stroke="#FF4D79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Voyager</span>
        </Link>
      </div>
      
      <div className="sidebar-content">
        <div className="menu-section">
          <div className="menu-title">MAIN MENU</div>
          <ul className="menu-items">
            <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
              <Link to="/voyager/">
                <Home size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/catering') ? 'active' : ''}`}>
              <Link to="/voyager/catering">
                <Utensils size={18} />
                <span>Order Catering Items</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/stationery') ? 'active' : ''}`}>
              <Link to="/voyager/stationery">
                <NotebookPen size={18} />
                <span>Order Stationery Items</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/movies') ? 'active' : ''}`}>
              <Link to="/voyager/movies">
                <Clapperboard size={18} />
                <span>Book Movie Tickets</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/beauty') ? 'active' : ''}`}>
              <Link to="/voyager/beauty">
                <Scissors size={18} />
                <span>Book Beauty Salon</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/fitness') ? 'active' : ''}`}>
              <Link to="/voyager/fitness">
                <Dumbbell size={18} />
                <span>Book Fitness Center</span>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/party') ? 'active' : ''}`}>
              <Link to="/voyager/party">
                <PartyPopper size={18} />
                <span>Book Party Hall</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="user-actions">
          <ul className="menu-items">
            <li className={`menu-item ${isActive('/profile') ? 'active' : ''}`}>
              <Link to="/voyager/profile">
                <User size={18} />
                <span>Profile</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/voyager/">
                <LogOut size={18} />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: 240px;
          background-color: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          overflow-y: auto;
          transition: width 0.3s ease;
          z-index: 100;
        }
        
        .sidebar.collapsed {
          width: 60px;
        }
        
        .sidebar-header {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          font-size: 20px;
          font-weight: 600;
          color: var(--primary);
          transition: opacity 0.3s ease;
        }
        
        .sidebar.collapsed .logo-text {
          opacity: 0;
          width: 0;
          overflow: hidden;
        }
        
        .sidebar-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 0;
        }
        
        .menu-section {
          margin-bottom: 24px;
        }
        
        .menu-title {
          padding: 0 16px;
          margin-bottom: 8px;
          font-size: 12px;
          text-transform: uppercase;
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
          transition: opacity 0.3s ease;
        }
        
        .sidebar.collapsed .menu-title {
          opacity: 0;
        }
        
        .menu-items {
          list-style: none;
        }
        
        .menu-item {
          margin-bottom: 4px;
        }
        
        .menu-item a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          color: var(--text-primary);
          border-radius: 6px;
          margin: 0 8px;
          transition: all 0.2s;
        }
        
        .menu-item a:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .menu-item.active a {
          background-color: var(--primary-light);
          color: var(--primary);
          font-weight: 500;
        }
        
        .sidebar.collapsed .menu-item a span {
          opacity: 0;
          width: 0;
          overflow: hidden;
        }
        
        .user-actions {
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: 0;
            z-index: 99;
          }
          
          .sidebar.collapsed {
            transform: translateX(-60px);
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;