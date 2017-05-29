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

    this.AppRouter = new Router();
    var headerView = new HeaderView();

    //attach header view
    $('nav').html(headerView.$el);

    //start backbone history
    Backbone.history.start();
  }
});
