//A servise working in action, a small passive peace of code waiting for it's time to show the nitification!

// A push has arrived ...
self.addEventListener('push', function(event) {
//let's have some default values to the data!

  var title = 'Cozee Homes';  
  var body = 'Your Cozee Home is ready!';  
  var icon = './static/img/javascript.png'; 

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon
    })  
  );  
});


// when user clicks the notification!
self.addEventListener('notificationclick', function(event) {
  //for android
  event.notification.close();
  //focus on the event!
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)      
      var url = '/chrome-push/index.html';    
      return clients.openWindow(url);
  }));
});
