var currentDay = $('#currentDay');

//adds timer and counts to the second
var timeInterval = setInterval(function() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
},1000);