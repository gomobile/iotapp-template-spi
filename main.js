/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting

/*
    The Serial Peripheral Interface (SPI) sample application distributed within Intel® XDK IoT Edition under the IoT with Node.js Projects project creation option showcases how to communicate with SPI devices with Intel(R) IoT platforms such as Intel(R) Edison as the master device.

	This sends 4 bytes on MOSI and if connected correctly will yield a 4 buffer object with the result on MISO and print both. Connect MOSI to MISO and input should match the result
	Acceptable parameters to the SPI constructor depends on the amount of SPI buses & chip selects you have. Mraa considers every chip select on every bus to be represented by a SPI object. But 0 is always the default.
	SPI pins are 10/11/12 on an Intel(R) Edison Arduino type board.
		* Pin 10 >> SS
		* Pin 11 >> MOSI
		* Pin 12 >> MISO
		* Pin 13 >> SCK
	
    MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
    Library in C/C++ to interface with Galileo & other Intel platforms, in a structured API with port names/numbering that match compatible boards & with bindings to javascript.

    Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image and an active internet connection
    Using a ssh client: 
	    1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
	    2. opkg update
	    3. opkg upgrade

    Article: https://software.intel.com/en-us/node-js-templates-for-intel-xdk-iot-edition
*/

var m = require('mraa'); //require mraa

// helper function to go from hex val to dec
function char(x) { 
	return parseInt(x, 16); 
}

var x = new m.Spi(0);
var buf = new Buffer(4);
buf[0] = char('0xf4');
buf[1] = char('0x2e');
buf[2] = char('0x3e');
buf[3] = char('0x4e');
var buf2 = x.write(buf);
console.log("Sent: " + buf.toString('hex') + ". Received: " + buf2.toString('hex'));
