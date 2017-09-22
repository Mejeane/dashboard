// GOALHEADER COMPONENT 

'use strict';

Vue.component('goalheader', { 
	template: ` <div class="goalheader-container">
                    <h1>Let us see if you can reach your goal!</h1>
	            </div>
                `
})

var goalheader = new Vue({
	el: '#goalheader'
})