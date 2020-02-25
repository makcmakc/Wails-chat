<template>
	<div class="info">

		

		<nav class="info-navigation">
			<ul>
				<li class="">
					<svg id="phone-icon" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 384 384" fill="#999999">
				<path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
				c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
				c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
				C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
				/>		</svg>
				</li>

				<li class="">
					<svg id="search-icon" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 511.999 511.999" fill="#999999"><path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/></svg>
				</li>

				<li class="" v-on:click="show">
					<svg id="drops-icon" class="icon" x="0px" y="0px"  width="17px" height="17px" viewBox="0 0 512 512" fill="">
				<g><g><g>
				<circle cx="256" cy="256" r="64"/>
				<circle cx="256" cy="448" r="64"/>
				<circle cx="256" cy="64" r="64"/>
				</g></g></g></svg>	
				</li>
			</ul>
		</nav>


		<modal 
			name="contact-info" 
			:width="400" 
			height="auto" :scrollable="true">

			<div class="contact-settings-content">

				<header class="contact__header">

					<h3>Информация</h3>

					<div class="close" v-on:click="hide">
						<svg id="close-icon" x="0px" y="0px" width="15" height="15" viewBox="0 0 386.667 386.667" fill="#999999">
				<path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>	
					</div>

					<div class="contact-profile">
						<div class="contact__image"></div>
						<div class="contact__name">Элис</div> 
						<div class="contact__status">был(а) сегодня в 23:14</div>	
					</div>			
				</header>



				<section class="contact__info">
				
					<div class="contact__phone">
						<div>7 456 344 39 35</div>
						<label for="">Телефон</label>
					</div>
					<div class="contact__name">
						<div>@maxa</div>
						<label for="">Имя пользователя</label>
					</div>
					<div class="notifications">
						<svg id="notification-icon" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 512 512" fill="#999999">
							<path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z"/></svg>	
						<span>Уведомления</span>
					</div>

					<toggle-button 
						:value="true"
						color="#82C7EB"
						:sync="true"
						:labels="true"/>					
        </section>

				<footer class="contact__actions">
					<ul>
						<li>Очистить историю</li>
						<li>Удалить чат</li>
						<li>Заблокировать</li>
					</ul>
					

				</footer>				
			</div>
		</modal>		

<Icons />
	</div>
</template>


<script>
	import Icons from '@/components/Icons.vue'

	export default {
		methods: {
			show () {
				this.$modal.show('contact-info');
			},
			hide () {
				this.$modal.hide('contact-info');
			}
		},
		components: {
			Icons
		}	
	};
</script>


<style>

.contact-settings-content {
	background: #F1F1F1;
}

header, section, footer {
	padding: 20px;
	background: #fff;
	margin-bottom: 10px;
}

.info-navigation {
	position: absolute;
	right: 10px;
	top: 17px;
}


.info-navigation ul li {
	width: 16px;
	height: 20px;
	margin: 0px 10px;
	padding: 5px 0px;
	float: left;
	cursor: pointer;
}

.contact__header .close{
	float: left;
	position: absolute;
	right: 27px;
	top: 23px;
	cursor: pointer;
}

.icon {
	fill: #999999;
}

.contact__header .contact-profile {
	margin-top: 35px;
}

.contact-profile {}


.contact__status {}


.contact__image {
	background: coral;
	background-position: center center;
	background-repeat: no-repeat; 
	background-size: cover;
	width: 60px;
	height: 60px;
	border-radius: 50%;

}


.contact__info {
	padding-bottom: 50px;
}

.contact__info .contact__name {
	padding: 10px;
}

.contact__info .notifications {
	float: left;
}

.contact__info .notifications span {
	margin-left: 30px;
	margin-top: 30px;
}

.vue-js-switch {
	float: right;
}

#notification-icon {
	float: left;
}

</style>