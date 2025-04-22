import { useState } from 'react';
import { User, Ship, Settings, Edit } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const userData = {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Ocean View Dr, Miami, FL 33101',
    memberSince: 'March 2022',
    membershipLevel: 'Diamond',
    loyaltyPoints: 12450,
    currentCruise: {
      name: 'Caribbean Paradise - 7 Days',
      dates: 'October 15, 2024 - October 22, 2024',
      cabin: 'A-1024'
    }
  };
  
  return (
    <div className="profile-page">
      <div className="profile-content">
        <h1 className="section-title">My Profile</h1>
        <p className="section-subtitle">Manage your personal information and preferences</p>
        
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">
                <User size={40} />
              </div>
              <h2 className="profile-name">{userData.name}</h2>
              <div className="membership-badge">Diamond Member</div>
              
              <div className="profile-contact">
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>{userData.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>{userData.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏠</span>
                  <span>{userData.address}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🎁</span>
                  <span>{userData.loyaltyPoints} Loyalty Points</span>
                </div>
              </div>
              
              <div className="current-cruise">
                <h3>Current Cruise</h3>
                <div className="cruise-name">{userData.currentCruise.name}</div>
                <div className="cruise-dates">{userData.currentCruise.dates}</div>
                <div className="cruise-cabin">Cabin {userData.currentCruise.cabin}</div>
              </div>
            </div>
          </div>
          
          <div className="profile-main">
            <div className="profile-tabs">
              <button 
                className={`profile-tab ${activeTab === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                <User size={18} />
                <span>Personal Info</span>
              </button>
              <button 
                className={`profile-tab ${activeTab === 'cruises' ? 'active' : ''}`}
                onClick={() => setActiveTab('cruises')}
              >
                <Ship size={18} />
                <span>My Cruises</span>
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'personal' && (
                <div className="personal-info">
                  <div className="section-header">
                    <h3>Personal Information</h3>
                  </div>
                  
                  <div className="info-grid">
                    <div className="info-group">
                      <label>Full Name</label>
                      <div className="info-value">{userData.name}</div>
                    </div>
                    <div className="info-group">
                      <label>Email Address</label>
                      <div className="info-value">{userData.email}</div>
                    </div>
                    <div className="info-group">
                      <label>Phone Number</label>
                      <div className="info-value">{userData.phone}</div>
                    </div>
                    <div className="info-group">
                      <label>Address</label>
                      <div className="info-value">{userData.address}</div>
                    </div>
                  </div>
                  
                  <div className="section-header">
                    <h3>Membership Details</h3>
                  </div>
                  
                  <div className="info-grid">
                    <div className="info-group">
                      <label>Member Since</label>
                      <div className="info-value">{userData.memberSince}</div>
                    </div>
                    <div className="info-group">
                      <label>Membership Level</label>
                      <div className="info-value">{userData.membershipLevel}</div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'cruises' && (
                <div className="my-cruises">
                  <h3>My Cruises</h3>
                  
                  <div className="cruise-list">
                    <div className="cruise-item current">
                      <div className="cruise-status">Current</div>
                      <div className="cruise-details">
                        <h4>Caribbean Paradise</h4>
                        <div className="cruise-meta">
                          <span>October 15 - 22, 2024</span>
                          <span>•</span>
                          <span>7 Days</span>
                        </div>
                        <div className="cruise-ports">
                          Miami → Nassau → St. Thomas → St. Maarten → Miami
                        </div>
                      </div>
                    </div>
                    
                    <div className="cruise-item">
                      <div className="cruise-status past">Past</div>
                      <div className="cruise-details">
                        <h4>Mediterranean Adventure</h4>
                        <div className="cruise-meta">
                          <span>May 10 - 17, 2024</span>
                          <span>•</span>
                          <span>7 Days</span>
                        </div>
                        <div className="cruise-ports">
                          Barcelona → Rome → Athens → Santorini → Barcelona
                        </div>
                      </div>
                    </div>
                    
                    <div className="cruise-item">
                      <div className="cruise-status past">Past</div>
                      <div className="cruise-details">
                        <h4>Alaska Expedition</h4>
                        <div className="cruise-meta">
                          <span>July 5 - 12, 2023</span>
                          <span>•</span>
                          <span>7 Days</span>
                        </div>
                        <div className="cruise-ports">
                          Seattle → Juneau → Skagway → Ketchikan → Victoria → Seattle
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .profile-page {
          padding: 24px;
        }
        
        .profile-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .profile-container {
          display: grid;
          gap: 24px;
          margin-top: 24px;
        }
        
        .profile-sidebar, .profile-main {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .profile-card {
          padding: 24px;
          text-align: center;
        }
        
        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 16px;
          background-color: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        
        .profile-name {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .membership-badge {
          display: inline-block;
          padding: 4px 12px;
          background-color: var(--primary-light);
          color: var(--primary);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
        }
        
        .profile-contact {
          text-align: left;
          margin-bottom: 24px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
        }
        
        .current-cruise {
          background-color: #f9f9f9;
          padding: 16px;
          border-radius: 8px;
          text-align: left;
        }
        
        .current-cruise h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .cruise-name {
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .cruise-dates, .cruise-cabin {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .profile-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
        }
        
        .profile-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          cursor: pointer;
        }
        
        .profile-tab.active {
          border-bottom-color: var(--primary);
          color: var(--primary);
        }
        
        .tab-content {
          padding: 24px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .section-header h3 {
          font-size: 18px;
          font-weight: 600;
        }
        
        .edit-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background-color: var(--primary-light);
          color: var(--primary);
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        
        .info-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .info-group label {
          display: block;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .info-value {
          font-weight: 500;
        }
        
        .cruise-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .cruise-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        
        .cruise-item.current {
          background-color: var(--primary-light);
        }
        
        .cruise-status {
          display: inline-block;
          padding: 4px 8px;
          background-color: var(--primary);
          color: white;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          height: fit-content;
        }
        
        .cruise-status.past {
          background-color: #ccc;
        }
        
        .cruise-details h4 {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .cruise-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .cruise-ports {
          font-size: 14px;
        }
        
        .preference-section {
          margin-bottom: 24px;
        }
        
        .preference-section h4 {
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .preference-options {
          display: grid;
          gap: 12px;
        }
        
        .preference-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .save-preferences-btn {
          padding: 10px 16px;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .save-preferences-btn:hover {
          background-color: var(--primary-dark);
        }
        
        @media (min-width: 768px) {
          .profile-container {
            grid-template-columns: 300px 1fr;
          }
          
          .info-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .preference-options {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;