// INFORMATION COMPONENT

'use strict';

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [8,10],
            backgroundColor: [
                '#2dbbdd',
                '#bfc3c9',
            ],
            
        }],
        labels: ["40% of 5823 steps"]
    }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [10, 20],
            backgroundColor: [
                '#cb8ebe',
                '#bfc3c9',
            ],
            
        }],
        labels: ["31% of 2184 Calories"]
    }
});

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [5, 25],
            backgroundColor: [
                '#9dcb41',
                '#bfc3c9',
            ],
            
        }],
        labels: ["8% of 5.5km"]
    }
});

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [7, 10],
            backgroundColor: [
                '#5c50a0',
                '#bfc3c9',
            ],
            
        }],
        labels: ["35% of 1 hour"]
    }
});


