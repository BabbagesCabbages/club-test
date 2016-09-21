var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    defaults: {
        onload: true,
        intro1: {
          title: 'Welcome!',
          slide: 1,
          text: 'What is this all about?',
        },
        intro2: {
          title: 'Introduction',
          slide: 2,
          text: 'Introduction to precision medicine',
        },
        intro3: {
          title: 'Introduction',
          slide: 3,
          text: 'Precision medicine: What is adjuvant treatment?',
        },
    }
});
