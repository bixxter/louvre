import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyCd0Q4ezDFxqsuWg997QfNo-dkdTSfpLwY',
  authDomain: 'belekcheck.firebaseapp.com',
  projectId: 'belekcheck',
  storageBucket: 'belekcheck.appspot.com',
  messagingSenderId: '804974182946',
  appId: '1:804974182946:web:ed81b672aebef07567807b',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
