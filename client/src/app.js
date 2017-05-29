'use strict';

//imports
import config from './config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Router from './router';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min';

//third-party libs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

//app.scss
import './assets/sass/app.scss';

// Instatiate Backbone router
var AppRouter = new Router();

Backbone.history.start();
