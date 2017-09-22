// COMMENTS COMPONENT 

'use strict';


Vue.component('comments', { 
	template: ` <div class="comments-container">
                    <h1>Hi there Angelina, check out your activity for today.</h1>
                    <h2>Woohoo!</h2> 
                    <h3>Not bad</h3>
                    <h4>You can do better!</h4>
                    <h5>Not bad</h5>               
	            </div>
                `
})

var comments = new Vue({
	el: '#comments'
})