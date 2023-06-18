import React, { useState } from 'react';
import './Conversation.scss';
import arrowdown from '../../assets/arrow-down-.svg';


function Conversation() {
  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 3', 'Item 1', 'Item 2', 'Item 3'];
  const renderItems = [];


  const [messageInput, setMessageInput] = useState('');
  const [ConvList, setConvList] = useState([{ 'from': 'agent', 'to': 'user', 'message': 'Hello' }, { 'from': 'user', 'to': 'agent', 'message': 'Hi' }, { 'from': 'agent', 'to': 'user', 'message': 'How are you?' }])

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };


  const handleSend = () => {
    if (messageInput.length > 0) {
      setMessageInput('');
      setConvList((prevConvList) => [
        ...prevConvList,
        { from: 'user', to: 'agent', message: messageInput }
      ]);
    }

  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectedConvList = () => {
    return (
      <ul className="chat-list">
        <li style={{ marginTop: 'auto' }}></li>
        {ConvList.map((conv, index) => (
          <li key={index}>
            <div
              className={`chat-bubble ${conv.from === 'agent' ? 'left' : 'right'}`}
            >
              {conv.message}
            </div>
          </li>
        ))}
        {/* <li></li>  */}
      </ul>
    );
  };

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
    <div className='conv'>
      <div className='conv-container'>
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
      <div className='conv-chat-window'>
        <div className='chat-window-topbar'>
          <div className='topbar-avatar ms-3'>KK</div>
          <div className='ms-3'>
            Karthikeya
          </div>
        </div>
        <div className='chat-window-body'>
          {selectedConvList()}
        </div>
        <div className='chat-window-input'>
          <textarea
            onKeyDown={handleKeyDown}
            value={messageInput}
            onChange={handleInputChange}
            placeholder='Type your message...'
          />
          <button className='send-button btn btn-primary' onClick={handleSend} style={{ height: 'fit-content' }}>
            Send
          </button>
        </div>
      </div>
      {/* <div className='conv-user-info'>
        
      </div> */}
    </div>

  );
}

export default Conversation;
