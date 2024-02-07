import { useState } from "react"
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase-Utils/firebase.utils"

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
    <>
      <h1>SignUpForm</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Name</label>
        <input
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleFormFields}
        />

        <label>Email</label>
        <input
          required
          type="email"
          value={email}
          name="email"
          onChange={handleFormFields}
        />

        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          name="password"
          onChange={handleFormFields}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleFormFields}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default SignUpForm
