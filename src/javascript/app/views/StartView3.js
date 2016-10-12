var BaseView = require('./BaseView');
var template = require('templates/startView3.hbs');


module.exports = BaseView.extend({

    className: 'patients-container',

    template: template,

    ui: {},
    events: {

    },

    initialize: function() {

      $('.spacer').css('display', 'none');
      $('.pt-2').removeClass('active');
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
