var BaseView = require('./BaseView');
var template = require('templates/screen2IntroView.hbs');


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

    },
    onBeforeRender: function() {
    },

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {window.location.reload();},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {

    }

});
