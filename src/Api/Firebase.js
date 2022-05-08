import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBS0Tv7S__VOtTY-znAQSS3I3QMMok0nTE',
  authDomain: 'pufferfish-ae6f0.firebaseapp.com',
  databaseURL: 'https://pufferfish-ae6f0-default-rtdb.firebaseio.com',
  projectId: 'pufferfish-ae6f0',
  storageBucket: 'pufferfish-ae6f0.appspot.com',
  messagingSenderId: '375582218213',
  appId: '1:375582218213:web:0e20857cd9622c26c7810c',
  measurementId: 'G-CKV5BZG9GM'
}


export default function inicializeDB() { 
  getAnalytics(initializeApp(firebaseConfig)) 
}