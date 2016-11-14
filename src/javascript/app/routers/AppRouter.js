var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        'screen2': 'screen2',
        'screen3': 'screen3',
        '*default': 'defaultHandler'
    },



    controller: new AppController()

});
