var BaseView = require('./BaseView');
var template = require('templates/startView3.hbs');


module.exports = BaseView.extend({

    className: 'patients-container',

    template: template,

    ui: {},
    events: {

    },

    initialize: function() {

      $('.spacer').css('display', 'none');

    },

    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {
      $('.spacer').css('display', 'block');
    }

});
