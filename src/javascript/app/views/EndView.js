var BaseView = require('./BaseView');
var template = require('templates/endView.hbs');


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,

    ui: {},

    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {

      $('#side-nav-intro').css('display', 'none');
      $('#side-nav-1').css('display', 'block');
$('.pat-nav-1').css('display', 'none');
$('.pat-nav-2').css('display', 'none');
$('.pat-nav-3').css('display', 'none');
    },
    onBeforeRender: function() {
    },

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {
    }

});
