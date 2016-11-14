var app = require('app/app');
var Marionette = require('backbone.marionette');

// Views
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');
var Screen2 = require('views/screen2');
var Screen3 = require('views/screen3');

module.exports = Marionette.Controller.extend({

    initialize: function () {
        app.state.set('onload', true);
        this.bootstrap();
    },

    bootstrap: function () {
        this.baseView = new BaseView();
    },

    scrollTop: function() {
      $('button.continue').on('click', function() {
        $(window).scrollTop(300);

      })
    },

    index: function () {
        var indexView = new IndexView();
        app.rootView.regionMain.show(indexView);
    },
    screen2: function () {
        var screen2 = new Screen2();
        app.rootView.regionMain.show(screen2);
    },
    screen3: function () {
        var screen3 = new Screen3();
        app.rootView.regionMain.show(screen3);
    },
    svgtest: function() {
        var svgTest = new SvgTest();
        app.rootView.contentMain.show(svgTest);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.35em', route);
    }

});
