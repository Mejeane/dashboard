// SIDEBAR COMP 

"use strict";


Vue.component('sidebar', { 
	template: ` <div class="sidebar-container">
	               <div id= "profile"><img src=img/profile.png></img></div>
	                  <h1>Angelina Jolie</h1>
	                     <ul>
	                   		<li><a href="dashboard.html">dashboard</a></li>
	                   		<li><a href="goal.html">goal</a></li>
	                   		<li>activity</li>
	                   		<li>sleep</li>
	                   		<a href="#"><input id="swapBtn" type="submit" value="theme"></a>
	                	</ul>
	            </div>
              `
})

var sidebar = new Vue({
	el: '#sidebar'
})