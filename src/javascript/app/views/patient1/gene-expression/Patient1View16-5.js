var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View16-5.hbs');
var Magnify = require('magnify');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {

    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {
      $('.magnify').magnify({
        speed: 200,
        src: 'images/ER_Invasive2_Velma.jpg'
      });
    },

    onBeforeDestroy: function() {},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
