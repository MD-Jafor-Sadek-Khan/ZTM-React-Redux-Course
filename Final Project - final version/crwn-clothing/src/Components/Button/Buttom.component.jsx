import {
  ButtonContainerStyled,
  GoogleSignInButtonStyled,
  InvertedButtonStyled,
  PaymentSpinner,
} from "./button.styles"

export const Button_Type_ClassName = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
}

const getButton = (buttonType) => {
  return {
    [Button_Type_ClassName.base]: ButtonContainerStyled,
    [Button_Type_ClassName.google]: GoogleSignInButtonStyled,
    [Button_Type_ClassName.inverted]: InvertedButtonStyled,
  }[buttonType]
}

export const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const DynamicButtonComponent = getButton(buttonType)

  return (
    <DynamicButtonComponent disabled={isLoading} {...otherProps}>
      {isLoading ? <PaymentSpinner /> : children}
    </DynamicButtonComponent>
  )
}
