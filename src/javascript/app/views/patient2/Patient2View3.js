var BaseView = require('../BaseView');
var template = require('templates/patient2/patient2view3.hbs');

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
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect1');
      $('.incorrect1').click(function(e) {
        if (e.target) {
          $('#modalIncorrect1').modal('show');
          $('.gray').removeClass('incorrect1');
          $('.gray').css('color', 'gray');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
          }
        });
      });

    },

    handleClick3: function() {
      $('.size-2-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect2');
      $('.incorrect2').click(function(e) {
        if (e.target) {
          $('#modalIncorrect2').modal('show');
          $('.gray').removeClass('incorrect2');
          $('.gray').css('color', 'gray');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
          }
        });
      });

    },
    handleClick2: function() {
      $('.size-3-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('correct');
      $('.correct').click(function(e) {
        if (e.target) {
          $('#modalCorrect').modal('show');
          $('.gray').removeClass('correct');
          $('.gray').css('color', 'gray');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
          }
        });
      });



    },
    handleClick1: function() {
      $('.size-4-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect3');
      $('.incorrect3').click(function(e) {
        if (e.target) {
          $('#modalIncorrect3').modal('show');
          $('.gray').removeClass('incorrect3');
          $('.gray').css('color', 'gray');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
          }
        });
      });

    },

    scrollTop: function(){
    	// $('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400); 
    },

    onDestroy: function() {
      $('#modalCorrect').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
