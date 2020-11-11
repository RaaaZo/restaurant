import React from 'react'
import styled from 'styled-components'
import OrderCheckout from 'components/organisms/OrderCheckout'
import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'

import orderHero from 'assets/img/hero_order-min.jpg'

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
      <HeroImage
        src={orderHero}
        alt='Order hero image at the top of the page'
      />
      <InnerWrapper>
        <StyledHeader>Twoje zamówienie:</StyledHeader>
      </InnerWrapper>
      <OrderCheckout />
    </PagesWrapper>
  )
}

export default CartPage
