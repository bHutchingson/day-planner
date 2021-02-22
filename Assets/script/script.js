var currentDay = $('#currentDay');

var currentTime = moment().startOf('hour').format('LT');
var beforeTime = moment().startOf('day').add(0, 'hours');



//adds timer and counts to the second
var timeInterval = setInterval(function() {
    timeBetween();
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
},1000);


var time9 = $('#time9');
var nineAm = beforeTime.add(9, 'hour').format('LT');
$('#nineAm').text(nineAm);


var time10 = $('#time10');
var tenAm = beforeTime.add(1, 'hour').format('LT');
$('#tenAm').text(tenAm);


var time11 = $('#time11');
var elevenAm = beforeTime.add(1, 'hour').format('LT');
$('#elevenAm').text(elevenAm);


var time12 = $('#time12');
var twelvePm = beforeTime.add(1, 'hour').format('LT');
$('#twelvePm').text(twelvePm);


var time1 = $('#time1');
var onePm = beforeTime.add(1, 'hour').format('LT');
$('#onePm').text(onePm);


var time2 = $('#time2');
var twoPm = beforeTime.add(1, 'hour').format('LT');
$('#twoPm').text(twoPm);


var time3 = $('#time3');
var threePm = beforeTime.add(1, 'hour').format('LT');
$('#threePm').text(threePm);


var time4 = $('#time4');
var fourPm = beforeTime.add(1, 'hour').format('LT');
$('#fourPm').text(fourPm);


var time5 = $('#time5');
var fivePm = beforeTime.add(1, 'hour').format('LT');
$('#fivePm').text(fivePm);

function timeBetween() {
   
    // 9 am
    if (nineAm === currentTime) {
        time9.addClass('present');
    } else if (nineAm < currentTime) {
        time9.addClass('past');
    } else {
        time9.addClass('future');
    };

    // 10 am
    if (tenAm === currentTime) {
        time10.addClass('present');
    } else if (tenAm < currentTime) {
        time10.addClass('past');
    } else {
        time10.addClass('future');
    };

    // 11 am
    if (elevenAm === currentTime) {
        time11.addClass('present');
    } else if (elevenAm < currentTime) {
        time11.addClass('past');
    } else {
        time11.addClass('future');
    };

    // 12 pm
    if (twelvePm === currentTime) {
        time12.addClass('present');
    } else if (twelvePm < currentTime) {
        time12.addClass('past');
    } else {
        time12.addClass('future');
    };

    // 1 pm
    if (onePm === currentTime) {
        time1.addClass('present');
    } else if (onePm < currentTime) {
        time1.addClass('past');
    } else {
        time1.addClass('future');
    };

    // 2 pm
    if (twoPm === currentTime) {
        time2.addClass('present');
    } else if (twoPm < currentTime) {
        time2.addClass('past');
    } else {
        time2.addClass('future');
    };

    // 3 pm
    if (threePm === currentTime) {
        time3.addClass('present');
    } else if (threePm < currentTime) {
        time3.addClass('past');
    } else {
        time3.addClass('future');
    };

    // 4 pm
    if (fourPm === currentTime) {
        time4.addClass('present');
    } else if (fourPm < currentTime) {
        time4.addClass('past');
    } else {
        time4.addClass('future');
    };

    // 5 pm
    if (fivePm === currentTime) {
        time5.addClass('present');
    } else if (fivePm < currentTime) {
        time5.addClass('past');
    } else {
        time5.addClass('future');
    };

    //reset at midnight
    

};

console.log(nineAm);
console.log(currentTime);