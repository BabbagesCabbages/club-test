var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View1.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
    },

    initialize: function() {
      $('.first-step').addClass('completed');
      $('body').css('background-image','url("images/bg2.jpg")');
    },
    onBeforeRender: function() {},

    onRender: function() {
      var  snav = $(".side-nav");
          snscroll = "side-nav-scrolled";

      $(window).scroll(function() {
        if( $(this).scrollTop() > 200 ) {
          snav.addClass(snscroll);
        } else {
          snav.removeClass(snscroll);
        }
      });
    },

    onBeforeShow: function() {},

    onShow: function() {

    },
    scroll: function() {
    },
    onBeforeDestroy: function() {},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {

    }

});
