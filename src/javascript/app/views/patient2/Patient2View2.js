var BaseView = require('../BaseView');
var template = require('templates/patient2/patient2view2.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        'click .cancer': 'handleClick',
        'click #next-page':'nextPage',
        'click image': 'handleClick2'
    },

    initialize: function() {

    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    handleClick: function() {
      $('#modalIncorrect').modal('hide');
      $('.circle').css('display','block');
      $('.circle2').css('display','block');
      $('.st0').css('display','block');
      $('#modalCorrect').modal('show');
      $('.close-modal').click(function(e) {
        if (e.target) {
          $('#modalIncorrect').modal('hide');
        }
      });
    },
    handleClick2: function() {
      $('#modalIncorrect').modal('show');
    },
    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400);
    },
    nextPage: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    onDestroy: function() {
    }

});
