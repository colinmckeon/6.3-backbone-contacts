var $ = require('jquery');
var Backbone = require('backbone');
var contactItemTemplate = require('../../templates/contactitem.hbs');

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
}

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

      var contactDetails = $(event.currentTarget).serializeObject();
      this.collection.create(contactDetails);

      // var contactFullName = $('#full-name').val();
      // this.collection.create({fullname: contactFullName});
      // $('#full-name').val('');
      //
      // var contactEmail = $('#email').val();
      // this.collection.create({email: contactEmail});
      // $('#email').val('');
      //
      // var contactPhoneNumber = $('#phone-number').val();
      // this.collection.create({phonenumber: contactPhoneNumber});
      // $('#phone-number').val('');
      //
      // var contactTwitter = $('#twitter').val();
      // this.collection.create({twitter: contactTwitter});
      // $('#twitter').val('');
      //
      // var contactLinkedin = $('#linkedin').val();
      // this.collection.create({linkedin: contactLinkedin});
      // $('#linkedin').val('');
    }
});





var ContactListView = Backbone.View.extend({
    tagName: 'ul',
    attributes: {
      className: 'contact-items col-md-12 list-group'
    },

    initialize: function(){
      this.listenTo(this.collection, 'add', this.renderListItem)
    },

    render: function(){
      return this;
    },

    renderListItem: function(listItem){
      var contactItemView = new ContactItemView({model: listItem});
      this.$el.append(contactItemView.render().el);
    }
});


var ContactItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-contact-item',
    template: contactItemTemplate,
    // events: {
    //   'click'
    // },

    render: function(){
      var context = this.model.toJSON();
      this.$el.html(this.template(context));
      return this;
    }

});


module.exports = {
  ContactFormView: ContactFormView,
  FormSubmittalView: FormSubmittalView,
  ContactListView: ContactListView,
  ContactItemView: ContactItemView
};
