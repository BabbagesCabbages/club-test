var BaseView = require('./BaseView');
var template = require('templates/index.hbs');

var IndexModel = require('../models/indexModel');

var indexModel = new IndexModel();


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    model: indexModel,
    ui: {},
    events: {
      'click #quizYes': 'goToYes',
      'click #quizNo': 'goToNo'
    },

    initialize: function() {

    },

    goToYes: function() {
      $('#region-main').animate({left : '-150%' },800);
      $('#region-main').addClass('animated');

    },

    goToNo: function() {


    },
    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {
      // $('#region-main').animate({left : '0%' },800);
    },

    onDestroy: function() {
      var region = $('#region-main');
      if (region.hasClass('animated')) {
        region.css('left','150%');
        setTimeout(function() {
            $('#region-main').animate({left : '0%' },800);
        },100)
        region.removeClass('animated');
      }
    }

});
