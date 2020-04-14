<template>
	<div class="login">
    
    <div class="container">

    <router-link to="/" class="next">Next<i class="material-icons">chevron_right</i></router-link >

    <form>

      <div class="form-title">
        <h2>Sign in</h2>
        <p>Please choose your country and enter your full phone number.</p>
      </div>

      <div class="group country">      
        <div class="form-group">
          <input type="text" required="required"/>
          <label for="input" class="control-label">Country</label>
          <i class="bar"></i>
        </div>
      </div>

      <div class="phone">
        <div class="group code">      
          <div class="form-group">
            <input 
              type="text" 
              required="required"
              v-mask="codeMask"
              />
            <label for="input" class="control-label">Code</label>
            <i class="bar"></i>
          </div>
        </div>

        <div class="group number">      
          <div class="form-group">
            <input 
              type="text" 
              required="required"
              v-mask="phoneMask"
              />
            <label for="input" class="control-label">Phone Number</label>
            <i class="bar"></i>
            </div>
          </div>
      </div>




    </form>		
    </div>
	</div>
</template>


<script>
import {mask} from 'vue-the-mask'
	export default {
    name: 'login',
    data() {
      return {
        codeMask: '+###',
        phoneMask: '(###)-###-##-##',
      }
    },
    directives: {
      mask
    },
    computed: {

    }
	};
</script>


<style>
@import url('../assets/css/materialDesignStyle.css');

.login {
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
}

.login .next {
  position: absolute;
  right: 20px;
  top: -60px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.login .next i {
  margin-top: -5px;
  
  font-size: 38px;
  position: absolute;
}




.login .container { 
  font-family:'Roboto';
  width: 400px; 
  margin: 80px auto 0; 
  display: block; 
  background: #FFF;
  padding: 50px;
  z-index: 9;
  position: relative;
}

.login .container form {
  margin-right: 20px;
  margin-left: 20px;
}



.login .container form .form-title {
  text-align: left;
  margin-bottom: 60px; 
}

.login .container form .form-title p {
  margin-top: 20px;
  color: #999;
  font-size: 16px;
}

.phone {
  display: flex;
  justify-content: space-between;
}

.phone .code {
  flex-basis: 10%;
}

.phone .number {
  flex-basis: 80%;
}

/*

h2 small { 
  font-weight: normal; 
  color: #888; 
  display: block; 
}

.login .container form .footer 	{ text-align:center; }
.login .container form .footer a  { color: #53B2C8; }


.login .container form .group { 
  position: relative; 
  margin-bottom: 45px; 
}


.login .container form .phone {
  display: inline-flex;
}

.login .container form .phone .code input {
  width: 20%;
}



.login .container form .phone .number {
  margin-left: -10px;
  width: 100%;
}

.login .container form .phone .number input {
  
}

.login .container form input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display:block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
}

.login .container form input:focus {
  outline:none; 
}


.login .container form label 				 {
  color: #999; 
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all; 
}


.login .container form input:focus ~ label, input:valid ~ label 		{
  top: -20px;
  font-size: 14px;
  color: #5264AE;
}

.login .container form .phone  .bar 	{ 
  position: relative; 
  display: block; 
  width: 100%; 
}


.login .container form .bar:before, .bar:after 	{
  content: '';
  height: 3.2px; 
  width: 0;
  bottom: -1px; 
  position: absolute;
  background: rgba(48,163,230,.9); 
  transition: 0.2s ease all; 
}

.login .container form .bar:before {
  left: 50%;
}

.login .container form .bar:after {
  right: 50%; 
}


.login .container form input:focus ~ .bar:before, input:focus ~ .bar:after {
  width: 50%;
}

.login .container form .highlight {
  position: absolute;
  height: 60%; 
  width: 100px; 
  top: 25%; 
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.login .container form input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}


@keyframes inputHighlighter {
	from { background: rgba(48,163,230,.8) }
  to 	{ width: 0; background: transparent; }
}	*/
</style>