let para = document.getElementById('number_para');
let random_number = document.getElementById('random');
let table = document.getElementById("table");
let game = document.getElementById("end");
let play_again = document.getElementById("button2");

var array = new Array()
len = 90;
for(var i=1;i<=90;++i) {
	array.push(i);
}

for(var i=0;i<9;++i) {
	for(var j=0;j<10;j++) {
		table.rows[i].cells[j].innerText = "";
	}
}
var row_prev = -1;
var column_prev = -1;
random_number.addEventListener('click',function() {
	var ran_value = Math.floor(Math.random() * len);
	len-=1;
	var n = array[ran_value].toString();
	var msg = new SpeechSynthesisUtterance(n);
	msg.pitch = 2;
	window.speechSynthesis.speak(msg);
	var row = parseInt(array[ran_value] / 10);
	var column = parseInt(array[ran_value] % 10);
	if(column == 0) {
		column = 10;
		row -= 1;
	}
	table.rows[row].cells[column-1].innerText = n;
	table.rows[row].cells[column-1].style.backgroundColor = "#fff2ac";
	table.rows[row].cells[column-1].style.backgroundImage = "linear-gradient(to right, #ffe359 0%, #fff2ac 100%)";
	if(row_prev !== -1 && column_prev !== -1) {
		table.rows[row_prev].cells[column_prev-1].style.background = null;
	}
	para.innerText = n;
	row_prev = row;
	column_prev = column;
	array.splice(ran_value,1);
	if(len == 0) {
		random_number.style.display = 'none';
		game.style.display = 'block';
	}
})

play_again.addEventListener('click',function() {
	if(confirm("Are you sure you want to reset the game?")) {
		random_number.style.display = 'block';
		game.style.display = 'none';
		para.innerText = ":D";
		array = new Array()
		len = 90;
		for(var i=1;i<=90;++i) {
			array.push(i);
		}

		for(var i=0;i<9;++i) {
			for(var j=0;j<10;j++) {
				table.rows[i].cells[j].innerText = "";
			}
		}
		var row_prev = -1;
		var column_prev = -1;
	}
})
