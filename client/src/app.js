//imports
import config from './config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Router from './router';

//header module
import HeaderView from './views/common/header';

module.exports = Backbone.View.extend({

  start() {

    //application's router
    this.AppRouter = new Router();

    //header view
    var headerView = new HeaderView();

    //attach header view
    $('nav').html(headerView.$el);

    //start backbone history
    Backbone.history.start();
  }
});
