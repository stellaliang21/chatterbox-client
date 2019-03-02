var Message = {

  addMessage: function (data) {
    for (var key in data) {
      var user = {};
      if (data[key].username && data[key].text && data[key].roomname) {
        user.username = data[key].username;
        user.text = data[key].text;
        user.roomname = data[key].roomname;
        MessagesView.renderMessage(user);
      }
    } 
  }
};

