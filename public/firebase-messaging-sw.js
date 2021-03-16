importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js");

// The contents of firebaseConfig can be obtained from the firebase console.
var firebaseConfig = {
  apiKey: "AIzaSyCj4pN0htCDHQR72-LgEsFx6QlItAoBlqw",
  authDomain: "cvideos-905a8.firebaseapp.com",
  databaseURL: "https://cvideos-905a8.firebaseio.com/",
  projectId: "cvideos-905a8",
  storageBucket: "cvideo-905a8.appspot.com",
  messagingSenderId: "596123512687",
  appId: "1:596123512687:web:0e2c4583dc46ec02f0029a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// When a notification is received, the push event is called.
self.addEventListener(
  "push",
  function(event) {
    console.log("event:push");
    let messageTitle = "MESSAGETITLE";
    let messageBody = "MESSAGEBODY";
    let messageTag = "MESSAGETAG";

    const notificationPromise = self.registration.showNotification(
      messageTitle,
      {
        body: messageBody,
        tag: messageTag,
      }
    );

    event.waitUntil(notificationPromise);
  },
  false
);

// If the web application is in the background, setBackGroundMessageHandler is called.
messaging.setBackgroundMessageHandler(function(payload) {
  console.log("backgroundMessage");

  let messageTitle = "MESSAGETITLE";
  let messageBody = "MESSAGEBODY";

  return self.registration.showNotification(messageTitle, {
    body: messageBody,
    tag: messageTag,
  });
});
