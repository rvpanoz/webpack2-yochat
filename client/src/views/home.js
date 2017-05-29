//imports
import config from '../config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import template from '../templates/home.html';

//import socket.io
import io from 'socket.io-client';

//connect to server
var socket = io(config.baseUrl);

var HomeView = Backbone.View.extend({
	template: template,

  events: {
    'click button.btn-send': '_onSend'
  },

	/**
	 * event handler to send messages
	 * @param  {[type]} e [description]
	 * @return
	 */
  _onSend(e) {
    e.preventDefault();
    var msg = $.trim(this.$('input').val());

    //is message empty?
    if(!msg.length) {
      return false;
    }

    this.sendMessage(msg);
    return false;
  },

	/**
	 * View initialization
	 * @param  {[type]} params [description]
	 * @return
	 */
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

	/**
	 * render the template
	 * @return [type] [description]
	 */
	render() {
		this.$el.html(this.template);
	},

	/**
	 * Show message to the users
	 * @param {[type]} msg [description]
	 * @return
	 */
  showMessage(msg) {
    this.$('ul.messages').append('<li>' + msg + '</li>');
  },

	/**
	 * Send a message to the server for broadcasting to all users
	 * @param {[type]} msg [description]
	 * @return
	 */
  sendMessage(msg) {
		//emit send event
		socket.emit('send', {
      msg: msg
    });

    $.trim(this.$('input').val('')); //clear value
    return false;
  }
});

module.exports = HomeView;
