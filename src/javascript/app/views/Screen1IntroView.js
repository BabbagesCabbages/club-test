var BaseView = require('./BaseView');
var template = require('templates/screen1IntroView.hbs');
var Backbone = require('backbone');


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},



    events: {
      'click .continue': 'scrollTop'
    },

    initialize: function() {
      //inject baseview with screen1view
     $('#Big-Browser-Modal').css('display','none');
      var  sn = $(".side-nav");
          sns = "side-nav-scrolled";

      $(window).scroll(function() {
        if( $(this).scrollTop() > 125 ) {
          sn.addClass(sns);
        } else {
          sn.removeClass(sns);
        }
      });
      var images = ['../images/bg1.jpg', '../images/bg2.jpg', '../images/bg3.jpg', '../images/bg4.jpg', '../images/bg5.jpg'];
      $('#home').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ')'});

  		// Only on mobile
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  			$('#Big-Browser-Modal').css('display','block');
      }
      

    },

    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {

    },

    onShow: function() {},

    onBeforeDestroy: function() {

    },
    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {

    }

});
