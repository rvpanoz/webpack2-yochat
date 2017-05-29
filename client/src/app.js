//imports
import config from './config';
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Router from './router';

//header module
import HeaderView from './views/common/header';

var App = Backbone.View.extend({

  start() {

    this.AppRouter = new Router();
    var headerView = new HeaderView();

    //attach header view
    $('nav').html(headerView.$el);

    //start backbone history
    Backbone.history.start();
  },

  navigate(cls, params) {
   var url = {};
   _.extend(url, {
     cls: cls,
     params: params
   });
   this.router.navigate(JSON.stringify(url), {
     trigger: true
   });

   return false;
 }
});

module.exports = App;
