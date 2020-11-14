import OrderedItem from 'components/molecules/OrderedItem'
import OrderSummary from 'components/molecules/OrderSummary'
import LoadingSpinner from 'components/utils/LoadingSpinner'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 1280px;
    flex-direction: row;
    justify-content: space-around;
  }
`
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const OrderCheckout = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  return (
    <Wrapper>
      <ItemWrapper>
        {cartItems ? (
          cartItems.map(({ id, name, price, image, qty }) => (
            <OrderedItem
              key={Math.random() * 999}
              image={image}
              dish={name}
              price={price}
              id={id}
              qty={qty}
            />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </ItemWrapper>

      <OrderSummary />
    </Wrapper>
  )
}

export default OrderCheckout
