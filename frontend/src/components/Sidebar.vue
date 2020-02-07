<template>
	<div class="sidepanel-top">
		<div class="bm-burger-button">
			
		</div>

		<div id="search">
			<input type="text" placeholder="Найти..." />
		</div>		
	

		<Slide noOverlay width="280">
			<h4>Маximillian</h4>
		</Slide>


	</div>
</template>


<script>
	import { Slide } from 'vue-burger-menu'
	export default {
		name: 'sidepanel-top',
		components: {
			Slide 
		},
	
	};
</script>


<style>
.bm-burger-button {
	position: fixed;
	width: 20px;
	height: 20px;
	left: 14px;
	top: 25px;
	cursor: pointer;
}
.bm-burger-bars {
	background-color: #999999;
}
.line-style {
	position: absolute;
	height: 8%;
	left: 0;
	right: 0;
}

.cross-style {
position: absolute;
top: 12px;
right: 2px;
cursor: pointer;
}
.bm-cross {
	background: #bdc3c7;
}
.bm-cross-button {
height: 24px;
width: 24px;
}
.bm-menu {
height: 100%; /* 100% Full-height */
width: 0; /* 0 width - change this with JavaScript */
position: fixed; /* Stay in place */
z-index: 1000; /* Stay on top */
top: 0;
left: 0;
background-color: #FFFFFF; /* Black*/
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 60px; /* Place content 60px from the top */
transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
background: rgba(0, 0, 0, 0.9);
}
.bm-item-list {
color: #b8b7ad;
margin-left: 10%;
font-size: 20px;
}
.bm-item-list > * {
display: flex;
text-decoration: none;
padding: 0.7em;
}
.bm-item-list > * > span {
margin-left: 10px;
font-weight: 700;
color: white;
}


</style>