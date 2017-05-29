'use strict';

//imports
import config from './config';
import $ from 'jquery';
import _ from 'lodash';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min';
import App from './app.js';

//css and scss
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './assets/sass/app.scss';


$(document).ready(function() {
  var app = new App();
  app.start();
});
