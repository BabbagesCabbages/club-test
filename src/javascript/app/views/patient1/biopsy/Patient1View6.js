var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View6.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        "click .correct": "handleClick",
        'click #next-page':'nextPage'
    },

    initialize: function() {
$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400); 
    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    handleClick: function() {
      $('path.circle').fadeIn('fast');
    },
    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400); 
    },
    nextPage: function() {
    },

    onDestroy: function() {
    }

});
