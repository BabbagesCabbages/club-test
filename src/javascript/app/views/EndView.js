var BaseView = require('./BaseView');
var template = require('templates/endView.hbs');


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,

    ui: {},

    events: {
        // 'click .continue': 'scrollTop'
    },

    initialize: function() {


    },
    onBeforeRender: function() {
    },

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},



    onDestroy: function() {
    }

});
