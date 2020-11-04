import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'





  var firebaseConfig = {
    apiKey: "AIzaSyCJkDeJn_0QQ30l4BKtbBYTCN1wTghfnnY",
    authDomain: "reacrfirebase.firebaseapp.com",
    databaseURL: "https://reacrfirebase.firebaseio.com",
    projectId: "reacrfirebase",
    storageBucket: "reacrfirebase.appspot.com",
    messagingSenderId: "501291348561",
    appId: "1:501291348561:web:eb27a88d1a339a7db9be70",
    measurementId: "G-P5359TVJPV"
  };
  // Initialize Firebase
  export default
  firebase.initializeApp(firebaseConfig);
  
