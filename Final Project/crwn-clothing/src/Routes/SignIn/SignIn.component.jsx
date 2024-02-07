import SignUpForm from "../../Components/SignUpForm/SignUpForm.component"
import {
  createUserDocumentFromAuth,
  singInWithGooglePopUp,
} from "../../utils/Firebase-Utils/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopUp()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
      <SignUpForm/>
    </>
  )
}

export default SignIn
