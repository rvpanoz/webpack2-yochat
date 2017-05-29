//imports
import config from '../config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import template from '../templates/home.html';

//import socket.io
import io from 'socket.io-client';

var socket = io('http://localhost:3033');

var HomeView = Backbone.View.extend({
	template: template,

  events: {
    'click button.btn-send': '_onSend'
  },

  _onSend(e) {
    e.preventDefault();
    var msg = $.trim(this.$('input').val());

    //is message empty?
    if(!msg.length) {
      return false;
    }

    //send the message to all clients
    this.sendMessage(msg);

    return false;
  },

	initialize(params) {

    //register socket.io events
    socket.on('join', _.bind(function (data) {
    	 this.showMessage(data.msg);
    }, this));

    socket.on('show:message', _.bind(function (data) {
    	 this.showMessage(data.msg);
    }, this));

    //render the view
		this.render();
	},

	render() {
    //render the template
		this.$el.html(this.template);
	},

  showMessage(msg) {

    //show the message
    this.$('ul.messages').append('<li>' + msg + '</li>');
  },

  sendMessage(msg) {

    //send the message to all clients using socket.io
    socket.emit('send', {
      msg: msg
    });

    //clear value
    $.trim(this.$('input').val(''));
    return false;
  }
});

module.exports = HomeView;
