import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { Paragraph } from 'components/atoms/Paragraph'
import OrderedItem from 'components/molecules/OrderedItem'
import OrderSummary from 'components/molecules/OrderSummary'
import { addOrder } from 'ducks/actions/orderActions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const CartItemsWrapper = styled.div`
  width: 100%;

  @media (min-width: 1360px) {
    flex-shrink: 2;
    align-self: flex-start;
    margin-left: 40px;
  }
`

const SummaryOrderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1360px) {
    flex-direction: row;
  }
`

const ShippingDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px auto;

  @media (min-width: 1360px) {
    justify-content: space-between;
    margin-left: 40px;
  }
`

const StyledSpan = styled.span`
  font-weight: normal;
`

const StyledHeader = styled(Header)`
  align-self: center;
  margin: 20px;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxxl};
`

const StyledParagraph = styled(Paragraph)`
  margin: 10px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`

const SummaryDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 1024px) {
    padding: 20px;
    flex-direction: row;
  }

  @media (min-width: 1360px) {
    flex-direction: column;
  }
`

const SummaryOrderPage = () => {
  const dispatch = useDispatch()
  const { shippingAddress, paymentMethod, cartItems } = useSelector(
    (state) => state.cart
  )
  const { userInfo } = useSelector((state) => state.userLogin)

  const checkoutButtonHandler = () => {
    dispatch(
      addOrder({
        userId: userInfo._id,
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
      })
    )
  }

  return (
    <PagesWrapper>
      <HeroImage
        src='https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt='Summary order Page hero image of food at the top'
      />
      <StyledHeader>Podsumowanie zamówienia</StyledHeader>
      <SummaryOrderWrapper>
        <CartItemsWrapper>
          {cartItems.map(({ id, name, price, image, qty }) => (
            <OrderedItem
              key={Math.random() * 999}
              image={image}
              dish={name}
              price={price}
              id={id}
              qty={qty}
              goToPayment
            />
          ))}
        </CartItemsWrapper>

        <SummaryDataWrapper>
          <ShippingDataWrapper>
            <StyledParagraph>
              Nazwa użytkownika: <StyledSpan>{userInfo.username}</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              E-mail: <StyledSpan>{userInfo.email}</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              Miasto: <StyledSpan>{shippingAddress.city}</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              Adres: <StyledSpan>{shippingAddress.address}</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              Kod Pocztowy:{' '}
              <StyledSpan>{shippingAddress.postalCode}</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              Metoda Płatności: <StyledSpan>{paymentMethod}</StyledSpan>
            </StyledParagraph>
          </ShippingDataWrapper>
          <OrderSummary checkoutHandler={checkoutButtonHandler} goToPayment />
        </SummaryDataWrapper>
      </SummaryOrderWrapper>
    </PagesWrapper>
  )
}

export default SummaryOrderPage
