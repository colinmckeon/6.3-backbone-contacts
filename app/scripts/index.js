var $ = require('jquery');
var models = require('./models/models.js');
var views = require('./views/views.js');

//waits for DOM to be ready
$(function(){

  var contactCollection = new models.ContactCollection();
  var contactFormView = new views.ContactFormView({collection: contactCollection});
  contactFormView.setElement($('#contact-form')[0]);

  var formSubmittalView = new views.FormSubmittalView({collection: contactCollection});
  formSubmittalView.setElement($('#contact-form')[0]);

contactCollection.fetch();
console.log(contactCollection);

}); //global function end
