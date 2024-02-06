import { singInWithGooglePopUp } from "../../utils/Firebase-Utils/firebase.utils"



const SignIn = () => {

    const logGoogleUser = async ()=>{

        const res = await singInWithGooglePopUp()
        console.log(res);

    }


  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
    </>
  )
}

export default SignIn
