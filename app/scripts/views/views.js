var $ = require('jquery');
var Backbone = require('backbone');
var contactItemTemplate = require('../../templates/contactitem.hbs');


var ContactFormView = Backbone.View.extend({
    events: {
      'submit': 'addContact'
    },

    addContact: function(){
      alert('Button Clicked');
    }
});




var FormSubmittalView = Backbone.View.extend({
    events: {
      'submit': 'contactSent'
    },

    contactSent: function(event){
      event.preventDefault();

      var contactFullName = $('#full-name').val();
      this.collection.create({fullname: contactFullName});
      $('#full-name').val('');

      var contactEmail = $('#email').val();
      this.collection.create({email: contactEmail});
      $('#email').val('');

      var contactPhoneNumber = $('#phone-number').val();
      this.collection.create({phonenumber: contactPhoneNumber});
      $('#phone-number').val('');

      var contactTwitter = $('#twitter').val();
      this.collection.create({twitter: contactTwitter});
      $('#twitter').val('');

      var contactLinkedin = $('#linkedin').val();
      this.collection.create({linkedin: contactLinkedin});
      $('#linkedin').val('');
    }
});





var ContactListView = Backbone.View.extend({
    tagName: 'ul',
    attributes: {
      className: 'contact-items col-md-12 list-group'
    },


});


var ContactItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-contact-item',
    template: contactItemTemplate,
    events: {
      'click'
    }

});


module.exports = {
  ContactFormView: ContactFormView,
  FormSubmittalView: FormSubmittalView
};
