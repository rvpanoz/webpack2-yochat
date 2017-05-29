//imports
import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import template from '../../templates/common/header.html';
import AppSettings from '../../views/common/app-settings';

var HeaderView = Backbone.View.extend({
	template: template,

  events: {
    'click a.app-settings': '_onAppSettings'
  },

  _onAppSettings(e) {
    e.preventDefault();
    return false;
  },

	/**
	 * View initialization
	 * @param  {[type]} params [description]
	 * @return
	 */
	initialize(params) {

    //render the view
		this.render();
	},

	/**
	 * render the template
	 * @return [type] [description]
	 */
	render() {
		this.$el.html(this.template);
	}

});

module.exports = HeaderView;
