import React from 'react'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import OrderSummaryItem from './OrderSummaryItem'
import { Button } from 'components/atoms/Button'
import { useTotalPrice } from 'hooks/UseTotalPrice'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.backgroundDark};
  padding: 20px;

  @media (min-width: 1024px) {
    width: 40%;
    align-self: flex-start;
  }

  ${({ goToPayment }) =>
    goToPayment &&
    css`
      @media (min-width: 1024px) {
        width: 80%;
        margin-left: 40px;
      }
    `}
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const OrderSummary = ({ goToPayment, checkoutHandler, order, noButton }) => {
  const { push } = useHistory()
  const { cartItems } = useSelector((state) => state.cart)

  const { userInfo } = useSelector((state) => state.userLogin)

  if (!userInfo) {
    push('/login')
  }

  const successToast = () =>
    toast.success('Zamówienie zostało złożone. Dziękujemy!')

  const deliveryTax = 10

  const cartFullPrice = useTotalPrice(cartItems)
  const orderFullPrice = useTotalPrice(order?.data.orderItems)

  return (
    <Wrapper goToPayment>
      <OrderSummaryItem
        title='Razem'
        price={orderFullPrice || cartFullPrice || 0}
      />
      <OrderSummaryItem title='Koszt dostawy' price={deliveryTax || 0} />
      <OrderSummaryItem
        title='Kwota całkowita'
        price={orderFullPrice + deliveryTax || cartFullPrice + deliveryTax || 0}
      />

      {noButton ? null : (
        <StyledButton
          onClick={() => {
            goToPayment && checkoutHandler()
            goToPayment ? push('/') : push('/shipping')
            goToPayment && successToast()
          }}
        >
          {goToPayment ? 'Zamawiam' : 'Przejdź dalej'}
        </StyledButton>
      )}
    </Wrapper>
  )
}

export default OrderSummary
