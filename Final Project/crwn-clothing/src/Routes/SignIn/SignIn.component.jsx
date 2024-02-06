import { createUserFromAuth, singInWithGooglePopUp } from "../../utils/Firebase-Utils/firebase.utils"



const SignIn = () => {

    const logGoogleUser = async ()=>{

        const {user} = await singInWithGooglePopUp()
        const userDocRef =await createUserFromAuth(user)
    }


  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
    </>
  )
}

export default SignIn
