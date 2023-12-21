import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import notification from '../../assets/notification.svg';
import threedots from '../../assets/threedots.svg';
import { Popover, Overlay, Tooltip, Button } from 'react-bootstrap';
import './HomePage.scss';

function HomePage() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="d-flex" style={{ overflowX: 'auto' }}>
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

        <div ref={ref}>
          <div className="d-flex flex-row justify-content-around align-items-center profile-menu" >
            <div className="circleName">KK</div>
            <div className="d-flex flex-column">
              <div style={{ fontSize: '14px' }}>Karthikeya</div>
              <div style={{ fontSize: '14px' }}>Admin</div>
            </div>
            <div>
              <img src={notification} alt="notification" style={{ height: '20px' }} />
            </div>
            <img src={threedots} alt="threedots" style={{ height: '20px' , cursor: 'pointer'}}  onClick={handleClick}/>
          </div>
          <Overlay
            show={show}
            target={target}
            placement="top"
            container={ref}
            containerPadding={10}
            rootClose>
            <Popover id="popover-contained">
              <Popover.Body>
              <div>Logout</div>
              </Popover.Body>
            </Popover>
          </Overlay>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
