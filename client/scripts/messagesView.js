var MessagesView = {
  $chats: $('#chats'),
  
  initialize: function() {
    //use the readall function to get the data
    //readAll is an ajax get function that needs a successful callback function
    Parse.readAll(data => Message.userText(data.results));
  },
  
  // render: function () {
    
  // },
    
  renderMessage: function (user) {
    //call MessageView.render on the objects we created in messages
    //append that to the DOM
    var message = MessageView.render(user);
    $(chats).append(message);
  }
};






































// var Parse.readAll = function (data) {
//   Message.userText(data.results);
// }
// var message = MessageView.render(user);
// $(chats).append(message);