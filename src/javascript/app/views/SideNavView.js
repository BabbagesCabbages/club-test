var BaseView = require('./BaseView');
var template = require('templates/sideNavIntro.hbs');
var SideNavModel = require('../models/SideNavModel');

var sideNavModel = new SideNavModel();

module.exports = BaseView.extend({

    className: '',

    template: template,
    model: sideNavModel,
    ui: {},

    events: {},

    initialize: function() {},

    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {}

});
