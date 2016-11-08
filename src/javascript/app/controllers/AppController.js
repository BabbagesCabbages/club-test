var app = require('app/app');
var Marionette = require('backbone.marionette');

// Views
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');



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
        //TODO -- PLACEHOLDER. HOOK UP ONCE WE KNOW WHAT THE INTRO SCREEN IS LIKE
        var indexView = new IndexView();
        app.rootView.regionMain.show(indexView);

    },
    svgtest: function() {
        var svgTest = new SvgTest();
        app.rootView.contentMain.show(svgTest);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.35em', route);
    }

});
