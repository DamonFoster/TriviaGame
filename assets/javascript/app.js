
var number = 30;
var answers = [];



function answerArray(){
	var answer = ($(this).attr("value"));
	console.log(answer);
	if ( answer === 'true1') {
		$('.f1').remove();
		answers.push(answer);
		console.log(answers);
	} else if ( answer === 'false1') {
		$('.t1').remove();
		answers.push(answer);
	} else if ( answer === 'true2') {
		$('.f2').remove();
		answers.push(answer);
		console.log(answers);
	}
}


$('.q1').text('Question 1');
$('.q2').text('Question 2');
$('.q3').text('Question 3');
$('.q4').text('Question 4');
$('.q5').text('Question 5');
$('.q6').text('Question 6');

var trueButton1 = $('<button id = "button" class = "t1" value = "true1">True</button>');
var falseButtion1 = $('<button id = "button" class = "f1" value = "false1">False</button>')
var trueButton2 = $('<button id = "button" class = "t2" value = "true2">True</button>');
var falseButtion2 = $('<button id = "button" class = "f2" value = "false2">False</button>')
var trueButton3 = $('<button id = "button" class = "t3" value = "true3">True</button>');
var falseButtion3 = $('<button id = "button" class = "f3" value = "false3">False</button>');
var falseButtion4 = $('<button id = "button" class = "f4" value = "false4">False</button>')
var trueButton4 = $('<button id = "button" class = "t4" value = "true4">True</button>');
var trueButton5 = $('<button id = "button" class = "t5" value = "true5">True</button>');
var falseButtion5 = $('<button id = "button" class = "f5" value = "false5">False</button>')
var trueButton6 = $('<button id = "button" class = "t6" value = "true6">True</button>');
var falseButtion6 = $('<button id = "button" class = "f6" value = "false6">False</button>')

$('.q1').append('<br>');
$('.q1').append(trueButton1);
$('.q1').append(falseButtion1);
$('.q2').append('<br>');
$('.q2').append(trueButton2);
$('.q2').append(falseButtion2);
$('.q3').append('<br>');
$('.q3').append(trueButton3);
$('.q3').append(falseButtion3);
$('.q4').append('<br>');
$('.q4').append(trueButton4);
$('.q4').append(falseButtion4);
$('.q5').append('<br>');
$('.q5').append(trueButton5);
$('.q5').append(falseButtion5);
$('.q6').append('<br>');
$('.q6').append(trueButton6);
$('.q6').append(falseButtion6);

$('#button').on('click', answerArray);



