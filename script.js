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

random_number.addEventListener('click',function() {
	var ran_value = Math.floor(Math.random() * len);
	len-=1;
	var n = array[ran_value].toString();
	var row = parseInt(array[ran_value] / 10);
	var column = parseInt(array[ran_value] % 10);
	if(column == 0) {
		column = 10;
		row -= 1;
	}
	table.rows[row].cells[column-1].innerText = n;
	para.innerText = n;
	array.splice(ran_value,1);
	if(len == 0) {
		random_number.style.display = 'none';
		game.style.display = 'block';
	}
})

play_again.addEventListener('click',function() {
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
})
