var Message = {
  userText: function (data) {
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

// user.roomname = data[key].roomname;


//iterates through the results array
//create variable to hold user object
//we check if the username, text, and roomname is present
//we set the each individual into an object with given keys






































// addMessage: function (data) {
//   for (var key in data) {
//     var user = {};
//     if (data[key].username && data[key].text && data[key].roomname) {
//       user.username = data[key].username;
//       user.text = data[key].text;
//       MessagesView.renderMessage(user);
//     }
//   } 
// }