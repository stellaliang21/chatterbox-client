var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var userMessage = {
      username: 'J&S',
      text: $('#message').val(),
      roomname: 'roomname',
    };
    //we need to use the create function from parse
    Parse.create(userMessage);
    MessagesView.renderMessage(userMessage);
    //Parse.readAll(user => Message.userText(userMessage));
    //we need to create a function as a success cb function
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};