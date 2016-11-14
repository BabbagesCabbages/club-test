var BaseView = require('./BaseView');
var template = require('templates/screen3.hbs');

var IndexModel = require('../models/indexModel');

var indexModel = new IndexModel();


module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    model: indexModel,
    ui: {},
    regions: {
        regionMain: '#region-main',
    },
    events: {
      'click #quizYes': 'goToYes',
      'click #quizNo': 'goToNo'
    },

    initialize: function() {

    },

    goToYes: function() {

    },

    goToNo: function() {


    },
    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {

    }

});
