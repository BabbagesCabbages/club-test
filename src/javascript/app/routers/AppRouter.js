var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'screen1',
        'screen2': 'screen2',
        'startview': 'startview',
        'patient1view1': 'patient1view1',
        'patient1view2': 'patient1view2',
        'patient1view3': 'patient1view3',
        'patient1view4': 'patient1view4',
        'patient1view5': 'patient1view5',
        'patient1view6': 'patient1view6',
        'patient1view7': 'patient1view7',
        'patient1view7_2': 'patient1view7_2',
        'patient1view7_3': 'patient1view7_3',
        'patient1view8': 'patient1view8',
        'patient1view9': 'patient1view9',
        'patient1view10': 'patient1view10',
        'patient1view11': 'patient1view11',
        'patient1view12': 'patient1view12',
        'patient1view13': 'patient1view13',
        'patient1view14': 'patient1view14',
        'patient1view15': 'patient1view15',
        'patient1view16': 'patient1view16',
        'patient1view17': 'patient1view17',
        'patient1view18': 'patient1view18',
        'patient1view19': 'patient1view19',
        'patient1view20': 'patient1view20',
        'patient1view21': 'patient1view21',
        'patient1view22': 'patient1view22',
        'patient1view23': 'patient1view23',
        'patient1view24': 'patient1view24',
        'patient1view25': 'patient1view25',
        'startview2': 'startview2',
        'patient2view1': 'patient2view1',
        'patient2view2': 'patient2view2',
        'patient2view3': 'patient2view3',
        'patient2view4': 'patient2view4',
        'patient2view5': 'patient2view5',
        'patient2view6': 'patient2view6',
        'patient2view7': 'patient2view7',
        'patient2view8': 'patient2view8',
        'patient2view9': 'patient2view9',
        'patient2view10': 'patient2view10',
        'patient2view11': 'patient2view11',
        'patient2view12': 'patient2view12',
        'startview3': 'startview3',
        'patient3view1': 'patient3view1',
        'patient3view2': 'patient3view2',
        'patient3view3': 'patient3view3',
        'patient3view4': 'patient3view4',
        'patient3view5': 'patient3view5',
        'patient3view6': 'patient3view6',
        'patient3view7': 'patient3view7',
        'patient3view8': 'patient3view8',
        'patient3view9': 'patient3view9',
        'patient3view10': 'patient3view10',
        'patient3view11': 'patient3view11',
        'patient3view12': 'patient3view12',
        'svgTest': 'svgtest',
        'endview': 'endview',
        '*default': 'defaultHandler'
    },



    controller: new AppController()

});
