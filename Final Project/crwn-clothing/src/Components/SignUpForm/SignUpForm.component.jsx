import { useState } from "react"

import "./signup-form.styles.scss"

import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase-Utils/firebase.utils"
import FormInput from "../Form-Input/FormInput.component"
import Button from "../Button/Buttom.component"

const initialFormFieldValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const { displayName, email, password, confirmPassword } = formFields

  const clearFormFields = () => {
    setFormFields(initialFormFieldValues)
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

    if (password !== confirmPassword) {
      alert("Passwords doesn't match")
      return
    }

    try {
      const { user } = await createAuthUserFromEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      clearFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Already Exists")
        return
      } else {
        console.log("Encountered Error while Creating User! ", error)
      }
    }
  }
  return (
    <div className="signup-form-container">
      <h2>Don't Have an Account?</h2>
      <span>SignUp with Email & Password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label="Name"
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleFormFields}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleFormFields}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
