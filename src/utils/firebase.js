import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  // ...
  apiKey: 'AIzaSyDYJmueVcnqE2VZQsc1ReM944DuFKwLqIA',
  authDomain: 'vue-crash-course-52962.firebaseapp.com',
  projectId: 'vue-crash-course-52962',
  storageBucket: 'vue-crash-course-52962.appspot.com',
  messagingSenderId: '1003520886661',
  appId: '1:1003520886661:web:2e6ff1c1600890df0066ec',
}
firebase.initializeApp(firebaseConfig)

export default firebase
