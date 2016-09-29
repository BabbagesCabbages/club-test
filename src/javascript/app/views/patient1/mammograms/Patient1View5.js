var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View5.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        'click .size-1': 'handleClick4',
        'click .size-2': 'handleClick3',
        'click .size-3': 'handleClick2',
        'click .size-4': 'handleClick1'
    },

    initialize: function() {
    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    handleClick4: function() {
      $('.size-1-active').css('display', 'block');
      $('.size-2-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('#modalIncorrect1').modal('show');
    },

    handleClick3: function() {
      $('.size-2-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('#modalIncorrect2').modal('show');
    },
    handleClick2: function() {
      $('.size-3-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');

        $('#modalCorrect').modal('show');
    },
    handleClick1: function() {
      $('.size-4-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('#modalIncorrect3').modal('show');
    },

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {
      $('#modalCorrect').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
