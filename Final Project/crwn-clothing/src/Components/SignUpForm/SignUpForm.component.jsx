import { useState } from "react"

const initialFormFieldValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const { name, email, password, confirmPassword } = formFields

  const handleFormFields = (event) => {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  console.log(formFields);
  return (
    <>
      <h1>SignUpForm</h1>
      <form onSubmit={()=>{}}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleFormFields}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleFormFields}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleFormFields}
        />

        <label>Confirm Password</label>
        <input
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
