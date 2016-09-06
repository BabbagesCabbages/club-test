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
        'svgTest': 'svgtest',
        '*default': 'defaultHandler'
    },


    // Patient 1 / Mammograms: 5 slides
    // Patient 1 / Biopsy: 5 slides + Quiz
    // Patient 1 / Gene Expression: 13 slides + Quiz
    // Patient 1 / Conclusions: 4 slides


    controller: new AppController()

});
