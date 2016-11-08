var Marionette = require('backbone.marionette');
var template = require('templates/index.hbs');
var Backbone = require('backbone');




module.exports = Marionette.ItemView.extend({

  className: 'container-fluid',

  template: template,

  ui: {},

  events: {},

  initialize: function() {




  },

  onBeforeRender: function() {},

  onRender: function() {},

  onBeforeShow: function() {},

  onShow: function() {

  },

  onBeforeDestroy: function() {},

  scrollTop: function(){
    $('body').animate({ scrollTop: '0' }, 0);
  },

  onDestroy: function() {}

});
