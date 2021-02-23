var currentDay = $('#currentDay');

var currentTime = moment().startOf('hour').format('LT');
var beforeTime = moment().startOf('day').add(0, 'hours');

var resetTime = moment().startOf('day').add(0, 'hours');

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

var midnight = resetTime.add(24, 'hour').format('LT');
console.log(midnight);

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
$('#click9').click(function() {
    input9 = $('#input9').val();
    console.log(input9);
    localStorage.setItem.JSON.Stringify("inputVal9", input9);
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




