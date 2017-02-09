/*
 * Communicate with I/O devices on the Serial Peripheral Interface (SPI).
 *
 * Supported Intel IoT development boards are identified in the code.
 *
 * Sends four bytes on MOSI and if connected correctly will yield a four byte
 * buffer object with the result on MISO and print both. Connect MOSI to MISO
 * and input should match the result.
 *
 * Acceptable parameters to the SPI constructor depends on the number of SPI
 * buses and chip selects. MRAA considers every chip select on every bus to be
 * represented by a SPI object. Zero is always the default.
 *
 * SPI pins are 10-13 on boards with Arduino compatible I/O headers (e.g., the
 * Edison and Galileo boards):
 *
 *      Pin 10 >> SS
 *      Pin 11 >> MOSI
 *      Pin 12 >> MISO
 *      Pin 13 >> SCK
 *
 * See LICENSE.md for license terms and conditions.
 *
 * https://software.intel.com/en-us/xdk/docs/using-templates-nodejs-iot
 */

/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


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
