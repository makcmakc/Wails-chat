<template>
	<div class="conversation">
		<div class="container">

	<!--	<Message 
			v-for="msg in messages" 
			v-bind:msg="msg" 
			v-bind:key="msg.id"
			v-on:delete-message="confirmDelete"
			/>	-->

		<div v-for="msg in messages" v-bind:key="msg.id">
			<div class="message" :class="{received: msg.received}" @contextmenu.prevent="$refs.menu.open">
				{{ msg.msg }}
				<span class="metadata">
				<span class="time">21:45</span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
				</span>						
			</div>	
		</div>



		<v-dialog />

    <vue-context ref="menu">
			<li>
				<a href="#">Ответить</a>
			</li>
			<li>
				<a href="#" v-on:click.prevent="copyText($event.target)">Копировать текст</a>
			</li>
			<li>
				<a href="#">Переслать сообщение</a>
			</li>
			<li>
				<a href="#" v-on:click="confirmDelete">Удалить сообщение</a></li>
			<li>
				<a href="#" @click.prevent="onClick($event.target.innerText)">Выделить сообщение</a>
			</li>
    </vue-context>	
    </div>

	</div>
</template>


<script>
//	import Message from './Message.vue'
	import VueContext from 'vue-context'

	export default {
		name: 'messages',
		props: ['messages'],
		components: {
		//	Message,
			VueContext 
		},
		methods: {
			confirmDelete() {
				this.$modal.show('dialog', {
				text: 'Удалить это сообщение?',
					buttons: [
						{
							title: 'Отмена'
						},
						{
							title: 'Удалить',
							handler: (id) => {
								this.$emit('delete-message', id)
							}
						}
					]
				})
			},
			copyText(text) {
				alert(text)
			}
		},
		mounted() {
		}
	};
</script>


<style>
@import '~vue-context/dist/css/vue-context.css';
/*
.grid { 
	display: grid;
	padding: 50px 50px;
}

.message:nth-child(even)  {
	margin-top: 20px;
}	

.from {
	float: left;
	background: 
}
*/
/* Messages */

.conversation {
  height: calc(100% - 12px);
  position: relative;
  z-index: 0;
}

.conversation ::-webkit-scrollbar {
  transition: all .5s;
  width: 5px;
  height: 1px;
  z-index: 10;
}

.conversation ::-webkit-scrollbar-track {
  background: transparent;
}

.conversation ::-webkit-scrollbar-thumb {
  background: #b3ada7;
}

.conversation .container {
  height: calc(100% - 68px);
  overflow-x: hidden;
  padding: 0 16px;
  margin-bottom: 5px;
}

.conversation .container:after {
  content: "";
  display: table;
  clear: both;
}

.message {
  color: #000;
  clear: both;
  line-height: 18px;
  font-size: 15px;
  padding: 8px;
  position: relative;
  margin: 8px 0;
  max-width: 85%;
  word-wrap: break-word;
  z-index: -1;
  padding: 10px;
  border-radius: 8px;
  background: #e1ffc7;
  border-radius: 5px 0px 5px 5px;
  float: right;  
}

.message:after {
	border-width: 0px 0 10px 10px;
  border-color: transparent transparent transparent #e1ffc7;
  top: 0;
  right: -10px;
  position: absolute;

  content: "";
  width: 0;
  height: 0;
  border-style: solid;
}

.message:first-child {
  margin: 16px 0 8px;
}

.message.received {
  background: #fff;
  border-radius: 0px 5px 5px 5px;
  float: left;
}

.message.received:after {
  border-width: 0px 10px 10px 0;
  border-color: transparent #fff transparent transparent;
  top: 0;
  left: -10px;
}

.metadata {
  display: inline-block;
  float: right;
  padding: 0 0 0 7px;
  position: relative;
  bottom: -4px;
}

.message.received .metadata {
  padding: 0 0 0 16px;
}

.metadata .time {
  color: rgba(0, 0, 0, .45);
  font-size: 11px;
  display: inline-block;
}

.metadata .tick {
  display: inline-block;
  margin-left: 2px;
  position: relative;
  top: 4px;
  height: 16px;
  width: 16px;
}

.metadata .tick svg {
  position: absolute;
  transition: .5s ease-in-out;
}

.metadata .tick svg:first-child {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: perspective(800px) rotateY(180deg);
          transform: perspective(800px) rotateY(180deg);
}

.metadata .tick svg:last-child {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: perspective(800px) rotateY(0deg);
          transform: perspective(800px) rotateY(0deg);
}

.metadata .tick-animation svg:first-child {
  -webkit-transform: perspective(800px) rotateY(0);
          transform: perspective(800px) rotateY(0);
}

.metadata .tick-animation svg:last-child {
  -webkit-transform: perspective(800px) rotateY(-179.9deg);
          transform: perspective(800px) rotateY(-179.9deg);
}











</style>