import { getRedirectResult } from "firebase/auth"
import { useEffect } from "react"
import {
  auth,
  createUserFromAuth,
  singInWithGooglePopUp,
  signInWithGoogleRedirect,
} from "../../utils/Firebase-Utils/firebase.utils"

const SignIn = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth)
      if (response) {
        createUserFromAuth(response.user)
      }
    }

    fetchData()
  }, [])

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopUp()
    const userDocRef = await createUserFromAuth(user)
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </>
  )
}

export default SignIn
