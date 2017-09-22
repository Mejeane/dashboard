// LOGIN COMPONENT

'use strict';

Vue.component('login', { 
	template: ` <div class="login-container">
	              <form class="login-form middle">
	                <h1>Hello there</h1>
                    <input v-on:click="focus" type="text" id="username" placeholder="Username">
                    <input v-on:click="focus" type="password" id="password" placeholder="Password">
                    <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
	                <a href="#" class="forgot-link">Forgot Password?</a>
	              </form>
	            </div>
              `,
 methods: { 
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'angelina' && pass === 'brad') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert('Nope,sorry');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#f4b77a;";
      
    },

  }
});

var login = new Vue({
  el: '#login'
});

