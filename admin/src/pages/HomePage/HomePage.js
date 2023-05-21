import React, { useState } from 'react';
import { NavLink, Outlet  } from 'react-router-dom';
import notification from '../../assets/notification.svg';
import threedots from '../../assets/threedots.svg';

import './HomePage.scss';

function HomePage() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="d-flex flex-row">
      <section>
        <div className="sidebar vh-100 d-flex flex-column justify-content-between">
          <div>
            <div className="logo">Logo</div>
            <ul className="menu">
              <li>
                <NavLink
                  to="/app/home/dashboard"
                  className={`menu-item ${activeItem === 'dashboard' ? 'active' : ''}`}
                  onClick={() => handleItemClick('dashboard')}
                >
                  <span className="icon">🏠</span>
                  <span className="text">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app/home/conversation"
                  className={`menu-item ${activeItem === 'conversation' ? 'active' : ''}`}
                  onClick={() => handleItemClick('conversation')}
                >
                  <span className="icon">💬</span>
                  <span className="text">Conversation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app/home/settings"
                  className={`menu-item ${activeItem === 'settings' ? 'active' : ''}`}
                  onClick={() => handleItemClick('settings')}
                >
                  <span className="icon">⚙️</span>
                  <span className="text">Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center profile-menu">
            <div className="circleName">KK</div>
            <div className="d-flex flex-column">
              <div style={{ fontSize: '14px' }}>Karthikeya</div>
              <div style={{ fontSize: '14px' }}>Admin</div>
            </div>
            <div>
              <img src={notification} alt="notification" style={{ height: '20px' }} />
            </div>
            <img src={threedots} alt="threedots" style={{ height: '20px' }} />
          </div>
        </div>
      </section>
      <section>
      <Outlet />
      </section>
    </div>
  );
}

export default HomePage;
