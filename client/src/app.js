'use strict';

//imports
import config from './config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Router from './router';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min';

//import socket.io
import io from 'socket.io-client';

//third-party libs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

//app.scss
import './assets/sass/app.scss';

//connect to server
var socket = io('http://localhost:3033');

// Instatiate Backbone router
var AppRouter = new Router();

Backbone.history.start();
