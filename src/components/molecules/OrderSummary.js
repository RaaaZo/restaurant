import React from 'react'
import styled from 'styled-components'

import OrderSummaryItem from './OrderSummaryItem'
import { Button } from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.backgroundDark};
  padding: 20px;

  @media (min-width: 1024px) {
    width: 40%;
    align-self: flex-start;
  }
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const OrderSummary = () => {
  const { push } = useHistory()
  const { cart } = useSelector((state) => state.cart)

  const deliveryTax = 10

  const cartFullPrice = cart?.reduce((acc, item) => acc + item?.price, 0)

  return (
    <Wrapper>
      <OrderSummaryItem title='Razem' price={cartFullPrice || 0} />
      <OrderSummaryItem title='Koszt dostawy' price={deliveryTax || 0} />
      <OrderSummaryItem
        title='Kwota całkowita'
        price={cartFullPrice + deliveryTax || 0}
      />
      <StyledButton onClick={() => push('/shipping')}>Zapłać</StyledButton>
    </Wrapper>
  )
}

export default OrderSummary
