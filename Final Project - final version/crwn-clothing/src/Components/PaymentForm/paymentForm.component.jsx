import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button_Type_ClassName } from "../Button/Buttom.component"
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButtonStyled,
} from "./paymentForm.styled"
import { useState } from "react"
import { useSelector } from "react-redux"
import { userSelector } from "../../Store/user/user.selector"
import { selectCartTotal } from "../../Store/cart/cart.selectors"

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [paymentIsLoading, setPaymentIsLoading] = useState(false)

  const currentUser = useSelector(userSelector)
  const amount = useSelector(selectCartTotal)

  const paymentHandler = async (event) => {
    event.preventDefault()

    if (!elements || !stripe) {
      return
    }

    setPaymentIsLoading(true)
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    })

    setPaymentIsLoading(false)

    if (paymentResult.error) {
      alert("error", paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Success")
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Creadit-Card Payment: </h2>
        <CardElement />
        <PaymentButtonStyled
          isLoading={paymentIsLoading}
          buttonType={Button_Type_ClassName.inverted}
        >
          Pay Now
        </PaymentButtonStyled>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
