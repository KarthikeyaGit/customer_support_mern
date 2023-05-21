import React from 'react';
import './Conversation.scss';
import arrowdown from '../../assets/arrow-down-.svg';


function Conversation() {
  const items = ['Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3','Item 3','Item 1', 'Item 2', 'Item 3'];
  const renderItems = [];

  const listItems = () => {
    for (let i = 0; i < items.length; i++) {
      renderItems.push(
        <li key={i} className='conv-list-item ps-4'>
          <div className='list-item-avatar'>KA</div>
          <div className='d-flex flex-column ms-3'>
            <div>karthik</div>
            <div>{items[i]}</div>
          </div>
        </li>
      )
    }
    return renderItems;
  }

  return (
    <div className='d-flex flex-row conv'>
        <div className='conv-container w-100'>
        <div className='conv-heading'>
          Conversation
        </div>
        <div class="conv-button-container">
          <button class="btn conv-btn-toggle ps-1 active">Open Chat</button>
          <button class="btn conv-btn-toggle ps-5">Close</button>
        </div>
        <div className="conv-search-container">
          <span className="conv-search-icon ms-2">&#128269;</span>
          <input type="text" className="form-control conv-search-input" placeholder="Search by conversation" />
        </div>
        <div className="conv-list">
          <div className='conv-list-header align-items-center'>
            <img src={arrowdown} alt="arrowdown" style={{ height: '15px' }} />
            <div className='ms-2 list-header'>Not Serviced</div>
          </div>
          <div className='conv-list-items'>
            <ul>
              {listItems()}
            </ul>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Conversation;
