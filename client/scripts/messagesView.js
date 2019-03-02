var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function () {
    var message = MessageView.render(Message);
    $(chats).append(message);
  },
};