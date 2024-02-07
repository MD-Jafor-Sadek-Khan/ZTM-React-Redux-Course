import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
} from "firebase/auth"

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4f9MwlbsNNWR_MGRktRrexiXNvBViI6w",
  authDomain: "crwn-clothing-db-304ab.firebaseapp.com",
  projectId: "crwn-clothing-db-304ab",
  storageBucket: "crwn-clothing-db-304ab.appspot.com",
  messagingSenderId: "86324865595",
  appId: "1:86324865595:web:ab6dd119179df691708a1e",
}

const fireBaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const singInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

const db = getFirestore()

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userDocSnapShot = await getDoc(userDocRef)

  if (!userDocSnapShot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userDocRef
}
