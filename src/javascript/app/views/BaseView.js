var Marionette = require('backbone.marionette');
var template = require('templates/index.hbs');





module.exports = Marionette.ItemView.extend({

  className: 'container-fluid',

  template: template,

  ui: {},

  events: {},

  initialize: function() {
    var  sn = $(".side-nav");
        sns = "side-nav-scrolled";

    $(window).scroll(function() {
      if( $(this).scrollTop() > 125 ) {
        sn.addClass(sns);
      } else {
        sn.removeClass(sns);
      }
    });
    this.render();


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
