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
      <Messages v-bind:messages="messages" v-on:delete-message="deleteMsg" />
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

import "./assets/css/main.css"

export default {
  name: "app",
  data() {
    return {
      messages: [
        {id: 1, msg: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Что деревни то, буквоград своих дал это ее. Рукописи дал буквенных точках заглавных если, взгляд!', received: true},
        {id: 2, msg: 'Lorem ipsum dolor sit amet, orem ipsum dolor sit amet.', received: false},
        {id: 3, msg: 'blah blag djahsjd sadsdasdp landlnsd', received: true},
        {id: 4, msg: 'Consectetur adipisicing elit. Voluptate, quam.', received: false},
        {id: 5, msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum architecto totam quam fugit asperiores eum..', received: false},
      ]
    }
  },
  methods: {
    deleteMsg(id) {
      this.messages = this.messages.filter(m => m.id !== id)
    }
  },
  components: {
    Sidebar,
    Contacts,
    MessageInput,
    Messages,
    Info
  }
};
</script>
