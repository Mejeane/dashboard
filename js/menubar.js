// MENU COMP

'use strict';

Vue.component('menubar', { 
	template: ` <div class="menubar-container">
                    <h1>Search</h1>
                       <i class="fa fa-search" aria-hidden="true"></i>
                         <h1><a href="index.html">Login</a></h1>
                           <i class="fa fa-user" aria-hidden="true"></i>
	            </div>
                `
})

var menubar = new Vue({
	el: '#menubar'
})