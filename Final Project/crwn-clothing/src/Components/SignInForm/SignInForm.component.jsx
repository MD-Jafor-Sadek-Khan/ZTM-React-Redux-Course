import { useState } from "react"
import Button from "../Button/Buttom.component"
import FormInput from "../Form-Input/FormInput.component"
import "./sign-in-form.styles.scss"
import {
  SignInAuthUserFromEmailAndPassword,
  singInWithGooglePopUp,
} from "../../utils/Firebase-Utils/firebase.utils"

const initialFormFieldValues = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const { email, password } = formFields

  const logGoogleUser = async () => {
    try {
      await singInWithGooglePopUp()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormFields = (event) => {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await SignInAuthUserFromEmailAndPassword(email, password)
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid User/Password")
          break

        default:
          alert("An error Occourd")
          break
      }
    }
  }

  return (
    <div className="signin-form-container">
      <h2>I Already Have an Account!</h2>
      <span>Sign In with your Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          name="email"
          onChange={handleFormFields}
        />
        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={handleFormFields}
        />
        <div className="buttons-container">
          <Button type="submit">SignIn</Button>

          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            SignIn with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
