import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCMzfszxWl6jPXrkmCDOOvS4qPeuTzANh8',
  authDomain: 'high-thrills-nuxt.firebaseapp.com',
  projectId: 'high-thrills-nuxt',
  storageBucket: 'high-thrills-nuxt.appspot.com',
  messagingSenderId: '511386127243',
  appId: '1:511386127243:web:4d47c804dd6f97c34f3d8e',
  measurementId: 'G-PMEKBRD0PS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
