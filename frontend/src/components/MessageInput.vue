<template>
	<div class="main-input">
		<form @submit.prevent="onSubmit">
			<input 
				type="text" 
				class="msg-input" 
				placeholder="Написать сообщение..."
				v-model="newMsg"
				autocomplete="off"
			>

			<!--<div class="audio btn">
				<i v-if="newMsg !== ''" class="material-icons">send</i>
				<i v-else class="material-icons">keyboard_voice</i>
			</div>-->
		</form>
		<!--
		<div class="extra-functions">

			<div class="paperclip btn">
				<i class="material-icons">attach_file</i>
			</div>		

			<div class="emoji btn">
				<i class="material-icons">sentiment_satisfied_alt</i>			
			</div>

	

		</div>-->
	</div>
</template>


<script>
	

	export default {
		data() {
			return {
				newMsg: ''
			}
		},
		methods: {
			onSubmit() {
				if (this.newMsg.trim()) {

					const msg = {
						time: Date.now() ,
						content: this.newMsg,
						state: true
					}

					this.$emit('add-new-msg', msg)
					this.newMsg = ''
				}
			}
		},
		computed: {
		},
		mounted() {

		}
	};
</script>


<style>

.main-input {
  position: relative;
}


/*
.extra-functions .btn {
	width: 25px;
	height: 25px;
	bottom: 10px;
}

.extra-functions .paperclip {
	position: absolute;
	left: 14px;
}
.extra-functions .paperclip i {
	transform: rotate(45deg);
}

.extra-functions .emoji {
	position: absolute;
	right: 360px;
}

.audio {
	bottom: 10px;
	position: absolute;
	right: 300px;
}
*/

.msg-input {
	max-width: 65%;
	width: 50%;
	height: 30px;
	background: transparent;
	border: none;
	text-indent: 10px;

	word-break: keep-all;

	position: absolute;
	left: -150px;
	top: 8px;
}

#msgInut {
	width: 300px;
	height: 30px;
	font-size: 16px;
	margin-left: 80px;
	position: absolute;
}

</style>