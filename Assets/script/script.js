var currentDay = $('#currentDay');

var currentTime = moment().startOf('hour')/* .format('LT') */;
/* var beforeTime = moment().startOf('date').add(0, 'hours'); */

/* var resetTime = moment().startOf('day').add(0, 'hours'); */



//adds timer and counts to the second
var timeInterval = setInterval(function() {
    timeBetween();
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
},1000);


var time9 = $('#time9');
var nineAm = moment().startOf('day').add(9, 'hour');
$('#nineAm').text(nineAm.format('LT'));


var time10 = $('#time10');
var tenAm = moment().startOf('day').add(10, 'hour');
$('#tenAm').text(tenAm.format('LT'));


var time11 = $('#time11');
var elevenAm = moment().startOf('day').add(11, 'hour');
$('#elevenAm').text(elevenAm.format('LT'));


var time12 = $('#time12');
var twelvePm = moment().startOf('day').add(12, 'hour');
$('#twelvePm').text(twelvePm.format('LT'));


var time1 = $('#time1');
var onePm = moment().startOf('day').add(13, 'hour');
$('#onePm').text(onePm.format('LT'));


var time2 = $('#time2');
var twoPm = moment().startOf('day').add(14, 'hour');
$('#twoPm').text(twoPm.format('LT'));


var time3 = $('#time3');
var threePm = moment().startOf('day').add(15, 'hour');
$('#threePm').text(threePm.format('LT'));


var time4 = $('#time4');
var fourPm = moment().startOf('day').add(16, 'hour');
$('#fourPm').text(fourPm.format('LT'));


var time5 = $('#time5');
var fivePm = moment().startOf('day').add(17, 'hour');
$('#fivePm').text(fivePm.format('LT'));

/* var midnight = resetTime.add(24, 'hour').format('LT');
console.log(midnight); */

function timeBetween() {
   
    // 9 am
    if (currentTime.isSame(nineAm, 'hour')) {
        time9.addClass('present');
    } else if (nineAm.isBefore(currentTime, 'hour')) {
        time9.addClass('past');
    } else {
        time9.addClass('future');
    };

    // 10 am
    if (currentTime.isSame(tenAm, 'hour')) {
        time10.addClass('present');
    } else if (tenAm.isBefore(currentTime, 'hour')) {
        time10.addClass('past');
    } else {
        time10.addClass('future');
    };
    // 11 am
    if (currentTime.isSame(elevenAm, 'hour')) {
        time11.addClass('present');
    } else if (elevenAm.isBefore(currentTime, 'hour')) {
        time11.addClass('past');
    } else {
        time11.addClass('future');
    };

    // 12 pm
    if (currentTime.isSame(twelvePm, 'hour')) {
        time12.addClass('present');
    } else if (currentTime.isAfter(twelvePm, 'hour')) {
        time12.addClass('past');
    } else {
        time12.addClass('future');
    };

    // 1 pm
    if (currentTime.isSame(onePm, 'hour')) {
        time1.addClass('present');
    } else if (onePm.isBefore(currentTime, 'hour')) {
        time1.addClass('past');
    } else {
        time1.addClass('future');
    };

    // 2 pm
    if (currentTime.isSame(twoPm, 'hour')) {
        time2.addClass('present');
    } else if (twoPm.isBefore(currentTime, 'hour')) {
        time2.addClass('past');
    } else {
        time2.addClass('future');
    };

    // 3 pm
    if (currentTime.isSame(threePm, 'hour')) {
        time3.addClass('present');
    } else if (threePm.isBefore(currentTime, 'hour')) {
        time3.addClass('past');
    } else {
        time3.addClass('future');
    };

    // 4 pm
    if (currentTime.isSame(fourPm, 'hour')) {
        time4.addClass('present');
    } else if (fourPm.isBefore(currentTime, 'hour')) {
        time4.addClass('past');
    } else {
        time4.addClass('future');
    };

    // 5 pm
    if (currentTime.isSame(fivePm, 'hour')) {
        time5.addClass('present');
    } else if (fivePm.isBefore(currentTime, 'hour')) {
        time5.addClass('past');
    } else {
        time5.addClass('future');
    };

    //reset at midnight
    

};

var input9 = $('#input9');
var input10 = $('#input10');
var input11 = $('#input11');
var input12 = $('#input12');
var input1 = $('#input1');
var input2 = $('#input2');
var input3 = $('#input3');
var input4 = $('#input4');
var input5 = $('#input5');


// saves 9am to do
$('#click9').click(function(e) {
    input9 = $('#input9').val();
    console.log(input9);
    localStorage.setItem("inputVal9", input9);
});

// saves 10am to do
$('#click10').click(function() {
    input10 = $('#input10').val();
    console.log(input10);
    localStorage.setItem("inputVal10", input10);
});

// saves 11am to do
$('#click11').click(function() {
    input11 = $('#input11').val();
    console.log(input11);
    localStorage.setItem("inputVal11", input11);
});

// saves 12am to do
$('#click12').click(function() {
    input12 = $('#input12').val();
    console.log(input12);
    localStorage.setItem("inputVal12", input12);
});

// saves 1am to do
$('#click1').click(function() {
    input1 = $('#input1').val();
    console.log(input1);
    localStorage.setItem("inputVal1", input1);
});

// saves 2am to do
$('#click2').click(function() {
    input2 = $('#input2').val();
    console.log(input2);
    localStorage.setItem("inputVal2", input2);
});

// saves 3am to do
$('#click3').click(function() {
    input3 = $('#input3').val();
    console.log(input3);
    localStorage.setItem("inputVal3", input3);
});

// saves 4am to do
$('#click4').click(function() {
    input4 = $('#input4').val();
    console.log(input4);
    localStorage.setItem("inputVal4", input4);
});

// saves 5am to do
$('#click5').click(function() {
    input5 = $('#input5').val();
    console.log(input5);
    localStorage.setItem("inputVal5", input5);
});

//reload local storage
    input9.val(localStorage.getItem("inputVal9"));
    input10.val(localStorage.getItem("inputVal10"));
    input11.val(localStorage.getItem("inputVal11"));
    input12.val(localStorage.getItem("inputVal12"));
    input1.val(localStorage.getItem("inputVal1"));
    input2.val(localStorage.getItem("inputVal2"));
    input3.val(localStorage.getItem("inputVal3"));
    input4.val(localStorage.getItem("inputVal4"));
    input5.val(localStorage.getItem("inputVal5"));




