var $ = require('jquery');
var Backbone = require('backbone');


var ContactFormView = Backbone.View.extend({
    events: {
      'submit': 'addContact'
    },

    addContact: function(){
      alert('Button Clicked');
    }
});

module.exports = {
  ContactFormView: ContactFormView
};
