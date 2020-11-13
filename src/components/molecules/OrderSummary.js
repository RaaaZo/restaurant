import React from 'react'
import styled from 'styled-components'

import OrderSummaryItem from './OrderSummaryItem'
import { Button } from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'

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
    width: 50%;
    align-self: flex-start;
  }
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const OrderSummary = ({ data }) => {
  const { push } = useHistory()

  const deliveryTax = 10

  const amountAndPrices = data.map((item) => {
    const price = item.amount * item.price

    return price
  })

  const totalPrice = amountAndPrices.reduce((acc, value) => acc + value, 0)

  return (
    <Wrapper>
      <OrderSummaryItem title='Razem' price={totalPrice || 0} />
      <OrderSummaryItem title='Koszt dostawy' price={deliveryTax} />
      <OrderSummaryItem
        title='Kwota całkowita'
        price={totalPrice + deliveryTax}
      />
      <StyledButton onClick={() => push('/shipping')}>Zapłać</StyledButton>
    </Wrapper>
  )
}

export default OrderSummary
