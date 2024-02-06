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

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const singInWithGooglePopUp = () => signInWithPopup(auth, provider)

const db = getFirestore()

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const userDocSnapShot = await getDoc(userDocRef)
  console.log(userDocSnapShot)
  console.log(userDocSnapShot.exists())

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
