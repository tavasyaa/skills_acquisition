$("#user-progress-a").click(function(){
    inactiveAll();
    $("#user-progress-li").addClass("active");
    $(".user-progress-menu").show();
    event.stopPropagation();
});

$("#friend-progress-a").click(function(){
    inactiveAll();
    $("#friend-progress-li").addClass("active");
    $(".friend-progress-menu").show();
    event.stopPropagation();
});

function inactiveAll(){
    $("#friend-progress-li").removeClass("active");
    $("#user-progress-li").removeClass("active");
    $(".friend-progress-menu").hide();
    $(".user-progress-menu").hide();
}

var spentHour1 = parseInt($("#spentHour1").text());
var remainHour1 = parseInt($("#remainHour1").text());
var totalHour1 = spentHour1 + remainHour1;

var spentHour2 = parseInt($("#spentHour2").text());
var remainHour2 = parseInt($("#remainHour2").text());
var totalHour2 = spentHour2 + remainHour2;

var currPer1 = "66";
var currPer2 = "20";

$("#update-btn1").click(function(){
	var hourText = $("#text-hour1").val();
	if($.isNumeric(hourText) && hourText <=24 && hourText>0){

		hourText = parseInt(hourText)
		config1.data.datasets[0].data[6] = hourText;

		updateDisplay1(hourText);
	}else{
        alert("Please enter a valid number of total hours between 1 and 24");
    }
});

function updateDisplay1(todayHour){
    var newSpentHour = spentHour1+todayHour;
    $("#spentHour1").text(newSpentHour);
    $("#remainHour1").text(remainHour1-todayHour);
    window.line1.update();

    $("#progress-circle1").removeClass("p" + currPer1);
    currPer1 = Math.floor(newSpentHour/totalHour1*100);
    if(currPer1<50){
        $("#progress-circle1").removeClass("over50");
    } else{
        $("#progress-circle1").addClass("over50");
    }
    $("#progress-circle1").addClass("p" + currPer1);
    $("#percentage1").text(currPer1+"%");
}

function updateDisplay2(todayHour){
    var newSpentHour = spentHour2+todayHour;
    $("#spentHour2").text(newSpentHour);
    $("#remainHour2").text(remainHour2-todayHour);
    window.line2.update();

    $("#progress-circle2").removeClass("p" + currPer2);
    currPer2 = Math.floor(newSpentHour/totalHour2*100);
    if(currPer2<50){
        $("#progress-circle2").removeClass("over50");
    } else{
        $("#progress-circle2").addClass("over50");
    }
    $("#progress-circle2").addClass("p" + currPer2);
    $("#percentage2").text(currPer2+"%");
}

$("#update-btn2").click(function(){
	var hourText = $("#text-hour2").val();
	if($.isNumeric(hourText) && hourText <=24 && hourText>0){
		hourText = parseInt(hourText)
		config2.data.datasets[0].data[6] = hourText;
        updateDisplay2(hourText);

		// var newSpentHour = spentHour2+hourText;
		// $("#spentHour2").text(newSpentHour);
		// $("#remainHour2").text(remainHour2-hourText);
		// window.line2.update();

		// $("#progress-circle2").removeClass(currPer2);
		// currPer2 = Math.floor(newSpentHour/totalHour2*100);
		// $("#progress-circle2").addClass("p" + currPer2);
		// $("#percentage2").text(currPer2+"%");
	}else{
    alert("Please enter a valid number of total hours between 1 and 24");
}
});



var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config1 = {
    type: 'line',
    data: {
        labels: ["2/22", "2/23", "2/24", "2/25", "2/26", "2/27", "2/28"],
        datasets: [{
            label: "Guitar Playing",
            backgroundColor: "#fa6282",
            borderColor: "#fa6282",
            data: [9, 0, 6, 7, 5, 7],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            text:'Time spent in the last 7 days'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hours'
                }
            }]
        }
    }
};

var config2 =  JSON.parse(JSON.stringify(config1));
config2.data.datasets[0].label = "Leather Working";
config2.data.datasets[0].backgroundColor = "#5bc0de";
config2.data.datasets[0].borderColor = "#5bc0de";
config2.data.datasets[0].data = [0, 0, 1, 1, 1, 9];

window.onload = function() {

    var ctx1 = document.getElementById("lineChart1").getContext("2d");
    var ctx2 = document.getElementById("lineChart2").getContext("2d");

    window.line1 = new Chart(ctx1, config1);
    window.line2 = new Chart(ctx2, config2);
};

$("#update-goal-btn").click(function(){
    var goalName = $("#goal-name").val();
    var totalHour = $("#total-hour-goal").val();
    if($.isNumeric(totalHour)==false || parseInt(totalHour) < 30){
        alert("Please enter a valid number of total hours, at least 30 hours");
    } else {
        $('#goal-setting-modal').modal('toggle');
        totalHour1 = totalHour;
        spentHour1 = 0;
        remainHour1 = totalHour;
        $("#progress-circle1").removeClass("p" + currPer1);
        currPer1 = 0;
        config1.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
        $("#goal1").text(goalName);
        updateDisplay1(0);
    }
});

$("#update-goal-btn2").click(function(){
    var goalName = $("#goal-name2").val();
    var totalHour = $("#total-hour-goal2").val();
    if($.isNumeric(totalHour)==false || parseInt(totalHour) < 30){
        alert("Please enter a valid number of total hours, at least 30 hours");
    } else {
        $('#goal-setting-modal2').modal('toggle');
        totalHour2 = totalHour;
        spentHour2 = 0;
        remainHour2 = totalHour;
        $("#progress-circle2").removeClass("p" + currPer2);
        currPer2 = 0;
        config2.data.datasets[0].data = [0, 0, 0, 0, 0, 0];
        $("#goal2").text(goalName);
        updateDisplay2(0);
    }
});

const form = document.querySelector('form.comment-update-form1');
const ul = document.querySelector('p.input_comment');
// const button = document.querySelector('#button_submit');
const input = document.getElementById('comment');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var objDiv = document.getElementById("chatbox");

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

if (form) {
const liMaker = (text) => {
  const li = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li.insertAdjacentHTML('beforeend',str)
  ul.append(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
});

data.forEach(item => {
  liMaker(item);
});
}


const form1 = document.querySelector('form.comment-update-form2');
const ul1 = document.querySelector('p.input_comment2');
// const button1 = document.querySelector('#button_submit2');
const input1 = document.getElementById('comment2');
let itemsArray1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];
var objDiv2 = document.getElementById("chatbox2");

localStorage.setItem('items1', JSON.stringify(itemsArray1));
const data1 = JSON.parse(localStorage.getItem('items1'));

if (form1){
const liMaker1 = (text) => {
  const li1 = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li1.insertAdjacentHTML('beforeend',str)
  ul1.append(li1);
}

form1.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray1.push(input1.value);
  localStorage.setItem('items1', JSON.stringify(itemsArray1));
  liMaker1(input1.value);
  input1.value = "";
  objDiv2.scrollTop = objDiv2.scrollHeight;
});

data1.forEach(item => {
  liMaker1(item);
});
}
