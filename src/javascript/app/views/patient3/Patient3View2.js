var BaseView = require('../BaseView');
var template = require('templates/patient3/patient3View2.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        'click .cancer': 'handleClick',
        'click #next-page':'nextPage',
        'click image': 'handleClick2',
        'click previous': 'noCircles'
    },
    initialize: function() {
        $('.gray').css('color', 'gray');
    },

    noCircles: function() {
      $('.selecty').remove();
    },

    handleClick: function(e) {
      $('.gray').removeClass('incorrect');
      var elm = $(this);
      var x = e.pageX - 70 + 'px';
      var y = e.pageY - 70 + 'px';
      var img = $('<img class="selecty" src="images/selector.png" alt="selector" />');
      var div = $('<div>').css({
          "position": "absolute",
          "left": x,
          "top": y,
          "class": "selecty"
      });
      div.append(img);
      $(document.body).append(div);
      $('image').css('pointer-events', 'none');
      $('image').css('curson', 'default');
      $('.gray').css('color', 'white');
      $('.gray').addClass('correct');
      $('.gray').addClass('whitey');
      $('.button.muted').css('color', 'white');
      $('.correct').click(function(e) {
        if (e.target) {

          $('#modalCorrect').modal('show');
          $('.gray').removeClass('correct');
          $('#modalIncorrect').modal('hide');
          $('.selecty').remove();
          $('#modalCorrect').css('display', 'block');
        }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect').modal('hide');
            $('.selecty').remove();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $('image').css('pointer-events', 'auto');
            $('image').css('curson', 'pointer');
          }
        });
      });
    },

    handleClick2: function(e) {

        var elm = $(this);
        var x = e.pageX - 70 + 'px';
        var y = e.pageY - 70 + 'px';
        var img = $('<img class="selecty" src="images/selector.png" alt="selector" />');
        var div = $('<div>').css({
            "position": "absolute",
            "left": x,
            "top": y,
            "class": "selecty"
        });
        div.append(img);
        $(document.body).append(div);
        $('image').css('pointer-events', 'none');
        $('image').css('curson', 'default');
        $('.cancer').css('pointer-events', 'none');
        $('.gray').css('color', 'white');
        $('.button.muted').css('color', 'white');
        $('.gray').addClass('incorrect');
        $('.gray').addClass('whitey');
        $('.incorrect').click(function(e) {
          if (e.target) {
            $('#modalIncorrect').modal('show');
            $('.gray').css('color', 'gray');
            $('.selecty').remove();
            $('.gray').removeClass('incorrect');
          }
        $('.close-modal').click(function(e) {
          if (e.target) {
            $('#modalCorrect').modal('hide');
            $('#modalIncorrect').modal('hide');
            $('.selecty').remove();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $('.gray').removeClass('incorrect');
            $('image').css('pointer-events', 'auto');
            $('image').css('curson', 'pointer');
            $('.cancer').css('pointer-events', 'auto');
          }
        });
      });

    },

    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    nextPage: function() {
      $('#modalIncorrect').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
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
