Backbone = require('backbone');
Backbone.Radio = require('backbone.radio');


//this is where you namespace events that are tied to a specific view
module.exports.globalChannel = Backbone.Radio.channel('global');
module.exports.userChannel = Backbone.Radio.channel('user');


//now we can use
//userChannel.on('some:event', function() {
//   console.log('an event has happened!');
//});

// userChannel.reply('some:request', 'food is good');
// userChannel.trigger('some:request');
