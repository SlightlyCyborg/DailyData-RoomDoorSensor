var SerialPort = require("serialport").SerialPort
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
			if (d == "opened"){
				//SAVE DATA HERE
			}
			if (d == "closed"){
				//SAVE DATA HERE
			}
			d = "";
			
		}
	});
});



