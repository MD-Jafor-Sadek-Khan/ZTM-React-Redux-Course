import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4f9MwlbsNNWR_MGRktRrexiXNvBViI6w",
  authDomain: "crwn-clothing-db-304ab.firebaseapp.com",
  projectId: "crwn-clothing-db-304ab",
  storageBucket: "crwn-clothing-db-304ab.appspot.com",
  messagingSenderId: "86324865595",
  appId: "1:86324865595:web:ab6dd119179df691708a1e",
}

const fireBaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const singInWithGooglePopUp = () => signInWithPopup(auth, provider)
