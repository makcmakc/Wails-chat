<template>
  <div id="app">

    <div id="sidepanel">
      <Sidebar />
      <Contacts />
    </div>

    <div class="info-panel">
      <Info />
    </div>  

    <div class="messages">
      <Messages />
    </div>

    <div class="message-input">
      <MessageInput />
    </div>

  </div>
</template>

<script>

import Sidebar from "./components/Sidebar.vue"
import Contacts from "./components/Contacts.vue"
import MessageInput from "./components/MessageInput.vue"
import Messages from "./components/Messages.vue"
import Info from "./components/Info.vue"

import "./assets/css/main.css";
import "./assets/css/sidepanel.css";

export default {
  name: "app",
  components: {
    Sidebar,
    Contacts,
    MessageInput,
    Messages,
    Info
  }
};
</script>
