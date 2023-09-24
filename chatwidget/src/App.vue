<template>
  <div class="c7d56e2f9a1">
    <div v-if="isOpen" class="chatwidget">
      <div class="topbar">
        <div></div>
        <div class="tb-close">
          <img src="./assets/cross.svg" alt="widget-close" />

        </div>
      </div>
      <div class="chat-window">
        <ul>
          <li v-for="(chat, index) in chatList" :key="index" :class="chat.user">
            <div class="timestamp">{{format_date(chat.createddate)}}</div>
            <div class="chat-bubble">
              {{ chat.msg }}
            </div>
          </li>
        </ul>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type a message" v-model="inputMessage" @keyup.enter="sendMessage" />
        <button class="send-btn" @click="sendMessage">send</button>
      </div>
    </div>

    <div class="chatWidget-btn" @click="isOpen = !isOpen">
      <img src="./assets/bot-logo.svg" alt="widget-btn" class="chatWidget-btn-logo" />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { hri } from "human-readable-ids";
import { io } from 'socket.io-client';


export default {
  data() {
    return {
      isOpen: false,
      chatList: [],
      inputMessage: "",
      socket: io("http://localhost:5000"),
      sessionId: ""
    };
  },
  mounted() {
    this.sessionId = localStorage.getItem('sessionId');
    console.log("sessionid",this.sessionId, this.sessionid == null);
    if (this.sessionId == null) {
      let id = hri.random();
      localStorage.setItem('sessionId', id);
      this.sessionId = id;

    }
    console.log("sessionId", this.sessionId);

    if (this.sessionId) {
      this.joinChat();
    }

  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim().length > 0) {
        let msg = { msg: this.inputMessage, user: "me", createddate: new Date() }
        this.socket.emit("message", msg);
        this.chatList.push(msg);
        this.inputMessage = "";
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format('LT');
      }
    },
    joinChat() {
      console.log("join", this.socket);
      this.socket.emit('join', this.sessionId);
    },
  }
};
</script>

<style>
* .c7d56e2f9a1 {
  margin: 0;
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 15px;
}

.c7d56e2f9a1 .chatwidget {
  position: fixed;
  right: 20px;
  bottom: 82px;
  height: 650px;
  width: 400px;
  box-shadow: rgba(0.24, 0, 0, 0.24) 0px 0px 4px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.c7d56e2f9a1 .chatWidget-btn {
  position: fixed;
  right: 20px;
  bottom: 13px;
  height: 55px;
  width: 55px;
  border-radius: 50px;
  background-color: #1F6FEB;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  cursor: pointer;
}

.c7d56e2f9a1 .topbar {
  height: 52px;
  width: 100%;
  background-color: #1F6FEB;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.c7d56e2f9a1 .tb-close img {
  height: 35px;
  width: 33px;
  margin-right: 6px;
}

.c7d56e2f9a1 .chat-window {
  overflow: auto;
  flex: 1;
}

.c7d56e2f9a1 .chat-input {
  height: 50px;
  width: 98%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #dfdfdf;
}

.c7d56e2f9a1 .chat-input input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}

.c7d56e2f9a1 .chatWidget-btn .chatWidget-btn-logo {
  height: 35px;
}

.c7d56e2f9a1 ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.c7d56e2f9a1 ul .me {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.c7d56e2f9a1 ul .him {
  display: flex;
  flex-direction: column;
  align-items: start;
}


.c7d56e2f9a1 .me .timestamp {
  font-size: 11px;
  margin-right: 15px;
  margin-bottom: 1px;
  color: #161616;

}

.c7d56e2f9a1 .me .chat-bubble {
  color: #ffffff;
    padding: 10px 15px;
    margin-right: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: end;
    width: -moz-fit-content;
    width: fit-content;
    min-width: 24px;
    margin-bottom: 10px;
    background: #1F6FEB;

}

.c7d56e2f9a1 .him .chat-bubble{
  background: #dbdbdb;
  padding: 10px 15px;
  margin-left: 15px;
  display: flex;
  justify-content: start;
  width: fit-content;
  min-width: 24px;
  border-radius: 5px;
  margin-bottom: 10px;

}

.c7d56e2f9a1 .him .timestamp {
  font-size: 11px;
  margin-left: 15px;
  margin-bottom: 1px;
  color: #161616;

}



.c7d56e2f9a1 .send-btn {
  background: #1F6FEB;
  border: none;
  color: #ffffff;
  margin-right: 9px;
  height: 35px;
  width: 64px;
  border-radius: 5px;

}
</style>
