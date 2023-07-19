<template>
  <div class="c7d56e2f9a1">
    <div v-if="isOpen" class="chatwidget">
      <div class="topbar"></div>
      <div class="chat-window">
        <ul>
          <li style="height: 10px"></li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li class="him">hi</li>
          <li class="me">hello how are you?</li>
          <li style="height: 10px"></li>
        </ul>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type a message" />
        <button class="send-btn">send</button>
      </div>
    </div>

    <div class="chatWidget-btn" @click="isOpen = !isOpen">
      <img src="./assets/bot-logo.svg" alt="widget-btn" class="chatWidget-btn-logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
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
  background-color: #0028FF;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  cursor: pointer;
}

.c7d56e2f9a1 .topbar {
  height: 52px;
  width: 100%;
  background-color: #0028FF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  justify-content: flex-end;
  background: #0028FF;
  color: #ffffff;
  padding: 10px 15px;
  margin-right: 15px;
  margin-left: auto;
  border-radius: 5px;
  width: fit-content;
}

.c7d56e2f9a1 ul .him {
  display: flex;
  justify-content: flex-start;
  background: #dbdbdb;
  padding: 10px 15px;
  margin-left: 15px;
  width: fit-content;
  border-radius: 5px;
}



.c7d56e2f9a1 .send-btn {
  background: #0028FF;
  border: none;
  color: #ffffff;
  margin-right: 9px;
  height: 35px;
  width: 64px;
  border-radius: 5px;

}
</style>
