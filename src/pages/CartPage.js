import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import OrderCheckout from 'components/organisms/OrderCheckout'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled(Header)`
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.backgroundDark};
  }
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const CartPage = () => {
  return (
    <PagesWrapper>
      <HeroImage src='https://cdn.pixabay.com/photo/2014/05/30/07/23/pizza-boxes-358029_960_720.jpg' />
      <InnerWrapper>
        <StyledHeader>Twoje zamówienie:</StyledHeader>
      </InnerWrapper>
      <OrderCheckout />
    </PagesWrapper>
  )
}

export default CartPage
