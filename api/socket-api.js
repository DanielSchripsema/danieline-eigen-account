const io = require('socket.io')();
const socketApi =  {
	io: io 
};

const client = require('prom-client');
const gauge = new client.Gauge({ name: 'number_of_clients', help: 'Some metrics about number of connected chat users'});

io.on('connection', function (socket) {
	gauge.inc(1);  // When a connection is established
	console.log('A user is connected');

	socket.on('disconnect', () => {
		console.log('User disconnected');
		gauge.dec(1); // When a user is disconnected.
	});

	socket.on('chat message', (msg) => {
		console.log('Message: ' + msg);
		io.emit('chat message', msg);
	});
});

module.exports = socketApi;