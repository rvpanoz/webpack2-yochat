'use strict';

//imports
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import template from '../templates/common/app-settings.html';

var AppModal = Backbone.View.extend({
  template: template,

  initialize(params) {
    this.render();
  },

  render() {
    this.$el.html(this.template);
  }
});

module.exports = AppModal;
