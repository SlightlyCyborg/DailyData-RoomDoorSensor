var SerialPort = require("serialport").SerialPort
var fs = require('fs');
var arduino = new SerialPort("/dev/ttyACM0", {
	  baudrate: 9600
});

var d = ""

arduino.on("open", function () {
	console.log('open');
	arduino.on('data', function(data) {
		if (data[data.length-1] != 10){
			d += data;
		}else{
			d += data;
			d = d.toString().slice(0,d.length-2);
			//SAVE DATA HERE
			to_write = d +', ' + getDateTime() + '\n';
			fs.appendFile("../data/br_door.dat", to_write, function(err) {
				if(err) {
					console.log(err);
				} 
			}); 
			d = "";
		}
	});
});

function getDateTime() {

	var date = new Date();

	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;

	var min  = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;

	var sec  = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") + month;

	var day  = date.getDate();
	day = (day < 10 ? "0" : "") + day;

	return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}



