import styled from "styled-components"
import { Button } from "../Button/Buttom.component"

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
`

export const PaymentButtonStyled = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`
