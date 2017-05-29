var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(client){

  io.emit('join', {
    msg: 'A new user joined.'
  });

  client.on('send', function(data) {
    //send to all clients
    io.emit('show:message', {
      msg: data.msg,
      for: 'everyone'
    });
  });

});

http.listen(3033, function(){
  console.log('listening on *:3033');
});
