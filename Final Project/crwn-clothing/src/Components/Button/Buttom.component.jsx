import "./button.styles.scss"

const Button_Type_ClassName = {
  google: "google-sign-in",
  inverted: "inverted",
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_ClassName[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
