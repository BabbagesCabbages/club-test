var BaseView = require('./BaseView');
var template = require('templates/startView2.hbs');


module.exports = BaseView.extend({

    className: 'patients-container',

    template: template,

    ui: {},
    events: {

    },

    initialize: function() {

      $('.spacer').css('display', 'none');
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

      $('.pt-1').removeClass('active');
      $('.pat-nav-1').css('display','none');
      $('.pat-nav-2').css('display','none');
      $('.pat-nav-3').css('display','none');
    },

    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {
      $('.spacer').css('display', 'block');
    }

});
