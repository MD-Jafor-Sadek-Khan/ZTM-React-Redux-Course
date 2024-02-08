import SignInForm from "../../Components/SignInForm/SignInForm.component"
import SignUpForm from "../../Components/SignUpForm/SignUpForm.component"
import "./authentication.styles.scss"

const Authentication = () => {
  return (
    <div className="auth-form-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
