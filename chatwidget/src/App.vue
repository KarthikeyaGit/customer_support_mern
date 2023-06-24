<template>
  <div class="c7d56e2f9a1">
    <div class="chatwidget">

      <div class="topbar">
      </div>
      <div class="chat-window">
        <ul>
          <li style="height: 10px;"></li>
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
          <li style="height: 10px;"></li>
        </ul>
      </div>
      <input type="text" class="chat-input" placeholder="Type a message">

    </div>

    <div class="chatWidget-btn">
      <img src="./assets/bot-logo.svg" alt="widget-btn" class="chatWidget-btn-logo">
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }
}
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
  bottom: 100px;
  height: 650px;
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}

.c7d56e2f9a1 .chatWidget-btn {
  position: fixed;
  right: 20px;
  bottom: 15px;
  height: 65px;
  width: 65px;
  border-radius: 50px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
}

.c7d56e2f9a1 .topbar {
  height: 65px;
  width: 100%;
  background-color: #0000ff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}

.c7d56e2f9a1 .chat-window {
  overflow: auto;
  flex: 1;
}

.c7d56e2f9a1 .chat-input {
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  font-size: 16px;
  padding-left: 10px;
  border-top: 1px solid rgb(155, 155, 155) ;
  outline: none;
}

.c7d56e2f9a1 .chatWidget-btn .chatWidget-btn-logo {
  height: 42px;
}

.c7d56e2f9a1 ul {
  list-style: none;
  padding: 0;
  width: 100%;


}

.c7d56e2f9a1 ul .me {
  display: flex;
  justify-content: flex-end;
  background: #0000ff;
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
</style>
