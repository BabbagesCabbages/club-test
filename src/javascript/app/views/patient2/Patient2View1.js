var BaseView = require('../BaseView');
var template = require('templates/patient2/patient2view1.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {
      $('.pt-2').addClass('active');
      $('.pat-nav-1').css('display','none');
      $('.pat-nav-2').css('display','inline');
      $('.pat-nav-3').css('display','none');
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
