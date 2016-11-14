var Marionette = require('backbone.marionette');
var constants = require('utils/constants');
var attachFastClick = require('fastclick');
var Backbone = require('backbone');


var Tabletop = require('tabletop');

module.exports = Marionette.LayoutView.extend({

    el: 'body',

    regions: {
        regionMain: '#region-main',
    },

    ui: {
        links: '[data-navigate]'
    },

    events: {
        'click @ui.links': 'onClickNavigate',
        'click .continue': 'closeModal'
    },

    initialize: function() {

        this.setListeners();
        this.$el.removeClass(constants.INITING_CLASS);



    Tabletop.init( { key: '1c6T8w924B_HvesVJZfXLtq2usG55NwwMQFt7eyoIkFs',
                     callback: function(data, tabletop) { console.log(JSON.stringify(data)) },
                     simpleSheet: true } )


      var loadUrl = Backbone.History.prototype.loadUrl;
          Backbone.History.prototype.loadUrl = function() {
          if (!loadUrl.apply(this, arguments)) this.trigger('route-not-found');
        };






    },
    // closeModal: function() {
    //   $('#modalBrowserWidth').modal('hide');
    //   $('body').removeClass('modal-open');
    //   $('.modal-backdrop').remove();
    // },
    setListeners: function() {

        // No click delay for iOS
        attachFastClick(document.body);

        // Force touch devices to respect :active styles in CSS
        document.addEventListener('touchstart', function() {}, true);

    },

    onClickNavigate: function(e) {
        e.preventDefault();
        var url = $(e.currentTarget).data('navigate') || $(e.currentTarget).attr('href');
        this.onNavigate(url);
    },

    onNavigate: function(url) {
      setTimeout(function() {
        app.trigger('navigate', {
            url: url,
            trigger: true
        });
      },810);


    }

});
