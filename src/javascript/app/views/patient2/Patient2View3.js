var BaseView = require('../BaseView');
var template = require('templates/patient2/patient2View3.hbs');

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
      $('.gray').removeClass('incorrect1');
      $('.gray').removeClass('incorrect2');
      $('.gray').removeClass('incorrect3');
      $('.gray').removeClass('correct');
      $('.size-1-active').css('display', 'block');
      $('.size-2-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect1');
      $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'none');
      $('.incorrect1').click(function(e) {
        if (e.target) {
          $('#modalIncorrect1').modal('show');$('#modalIncorrect1').modal({backdrop: 'static',});
          $('.gray').removeClass('incorrect1');
          $('.gray').css('color', 'gray');
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect2').modal('hide');
          $('#modalIncorrect3').modal('hide');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
            $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'auto');

          }
        });
      });

    },

    handleClick3: function() {
      $('.gray').removeClass('incorrect1');
      $('.gray').removeClass('incorrect2');
      $('.gray').removeClass('incorrect3');
      $('.gray').removeClass('correct');
      $('.size-2-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect2');
      $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'none');
      $('.incorrect2').click(function(e) {
        if (e.target) {
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect2').modal('hide');
          $('#modalIncorrect3').modal('hide');
          $('#modalIncorrect2').modal('show');
          $('.gray').removeClass('incorrect2');
          $('.gray').css('color', 'gray');
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect3').modal('hide');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
            $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'auto');

          }
        });
      });

    },
    handleClick2: function() {
      $('.gray').removeClass('incorrect1');
      $('.gray').removeClass('incorrect2');
      $('.gray').removeClass('incorrect3');
      $('.gray').removeClass('correct');
      $('.size-3-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-4-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('correct');
      $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'none');
      $('.correct').click(function(e) {
        if (e.target) {
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect2').modal('hide');
          $('#modalIncorrect3').modal('hide');
          $('#modalCorrect').modal('show');
          $('.gray').removeClass('correct');
          $('.gray').css('color', 'gray');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect2').modal('hide');
          $('#modalIncorrect3').modal('hide');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
            $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'auto');

          }
        });
      });



    },
    handleClick1: function() {
      $('.gray').removeClass('incorrect1');
      $('.gray').removeClass('incorrect2');
      $('.gray').removeClass('incorrect3');
      $('.gray').removeClass('correct');
      $('.size-4-active').css('display', 'block');
      $('.size-1-active').css('display', 'none');
      $('.size-2-active').css('display', 'none');
      $('.size-3-active').css('display', 'none');
      $('.gray').css('color', 'white');
      $('.gray').addClass('incorrect3');
      $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'none');
      $('.incorrect3').click(function(e) {
        if (e.target) {
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect2').modal('hide');
          $('#modalIncorrect3').modal('hide');
          $('#modalIncorrect3').modal('show');
          $('.gray').removeClass('incorrect3');
          $('.gray').css('color', 'gray');
          $('#modalCorrect').modal('hide');
          $('#modalIncorrect1').modal('hide');
          $('#modalIncorrect2').modal('hide');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect1').modal('hide');
            $('#modalIncorrect2').modal('hide');
            $('#modalIncorrect3').modal('hide');
            $('.size-1,.size-2,.size-3,.size-4').css('pointer-events', 'auto');
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
