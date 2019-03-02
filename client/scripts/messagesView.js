var MessagesView = {
  $chat: $('#chat'),

  initialize: function() {
    Parse.readAll(data => Message.addMessage(data.results));
  },

  // render: function () {

  // },

  renderMessage: function (user) {
    var message = MessageView.render(user);
    $(chat).append(message);
  }
};