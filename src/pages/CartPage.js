import React from 'react'
import styled from 'styled-components'
import OrderCheckout from 'components/organisms/OrderCheckout'
import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'

import orderHero from 'assets/img/hero_order-min.jpg'
import { useSelector } from 'react-redux'
import { Button } from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { Paragraph } from 'components/atoms/Paragraph'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled(Button)`
  margin: 40px auto 20px auto;
`

const StyledParagraph = styled(Paragraph)`
  margin: 20px;
`

const CartPage = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const { push } = useHistory()

  return (
    <PagesWrapper>
      <HeroImage
        src={orderHero}
        alt='Order hero image at the top of the page'
      />
      {cartItems.length === 0 ? (
        <InnerWrapper>
          <StyledHeader>Nie posiadasz żadnych dań w koszyku</StyledHeader>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            quas ut quasi, ullam minima minus?
          </StyledParagraph>
          <StyledButton onClick={() => push('/menu')}>
            Wybierz coś!
          </StyledButton>
        </InnerWrapper>
      ) : (
        <>
          <InnerWrapper>
            <StyledHeader mainHeader>Twój Koszyk:</StyledHeader>
          </InnerWrapper>
          <OrderCheckout />
        </>
      )}
    </PagesWrapper>
  )
}

export default CartPage
