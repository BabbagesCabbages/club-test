var BaseView = require('./BaseView');
var template = require('templates/index.hbs');


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,

    ui: {},
    events: {

    },

    initialize: function() {

    },

    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

    }

});
