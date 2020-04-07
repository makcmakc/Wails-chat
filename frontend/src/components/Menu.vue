<template>
	<Slide noOverlay width="280">

	
			<img src="../assets/images/vue.jpg">
			<h4>{{ name }}</h4>
			<div class="phone-number">
				{{ phoneNumber }}
			</div>			
	

		
		<div class="menu-points">
			<ul>
				<li><i class="material-icons">people_alt</i>Создать группу</li>
				<li><i class="material-icons">speaker</i>Создать канал</li>
				<li><i class="material-icons">person</i>Контакты</li>
				<li><i class="material-icons">call</i>Звонки</li>
				<li><i class="material-icons">settings</i>Настройка</li>
				<li><i class="material-icons">brightness_3</i>Ночной режим</li>
			</ul>
		</div>



	</Slide>
</template>


<script>
	import { Slide } from 'vue-burger-menu'
	export default {
		data() {
			return {
				name: 'Макс Телешев',
				phoneNumber: '+7 964 345 68 21',
			}
		},
		components: {
			Slide 
		}
	};
</script>


<style>
	
</style>