/**
 * A simple nodejs server
 **/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');

var people = [];

io.on('connection', function (client) {

  //broadcast to all users
  io.emit('join', {
    msg: 'A new user joined.'
  });

	client.on('joinserver', function (user, device) {
		var exists = false;

		_.find(people, function (key, value) {
			if (key.name.toLowerCase() === name.toLowerCase())
				return exists = true;
		});

    console.log(exists);
	});

	client.on('send:all', function (data) {
		io.emit('show:message', {
			msg: data.msg,
			for: 'everyone'
		});
	});
});

http.listen(3033, function () {
	console.log('listening on *:3033');
});
