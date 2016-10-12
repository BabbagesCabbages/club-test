var BaseView = require('../BaseView');
var template = require('templates/patient3/patient3view1.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {
      $('.pt-3').addClass('active');
      $('.pat-nav-1').css('display','none');
      $('.pat-nav-2').css('display','none');
      $('.pat-nav-3').css('display','inline');
    },
    onBeforeRender: function() {},

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
