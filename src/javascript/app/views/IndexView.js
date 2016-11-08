var BaseView = require('./BaseView');
var template = require('templates/index.hbs');

var IndexModel = require('../models/indexModel');
var Tabletop = require ('tabletop');
var indexModel = new IndexModel();


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    model: indexModel,
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

    }

});
