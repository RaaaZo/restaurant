import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { Paragraph } from 'components/atoms/Paragraph'
import OrderedItem from 'components/molecules/OrderedItem'
import OrderSummary from 'components/molecules/OrderSummary'
import LoadingSpinner from 'components/utils/LoadingSpinner'
import { getOrderById } from 'ducks/actions/orderActions'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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

const StyledIdSpan = styled.span`
  color: ${({ theme }) => theme.accentsLight};
  font-style: italic;
`

const OrderPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const orderHistory = useSelector((state) => state.orderHistory)

  const { loading, orderHistory: order } = orderHistory

  useEffect(() => {
    dispatch(getOrderById(id))
  }, [dispatch, id])

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <PagesWrapper>
          <HeroImage
            src='https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Order page hero image of food at the top'
          />

          <StyledHeader mainHeader>
            Zamówienie nr. <StyledIdSpan>{id}</StyledIdSpan>
          </StyledHeader>

          <SummaryOrderWrapper>
            <CartItemsWrapper>
              {!loading &&
                order.data.orderItems.map(({ image, name, price, qty }) => (
                  <OrderedItem
                    key={Math.random() * 999}
                    image={image}
                    dish={name}
                    price={price}
                    qty={qty}
                    noRemoveButton
                    goToPayment
                  />
                ))}
            </CartItemsWrapper>

            <SummaryDataWrapper>
              <ShippingDataWrapper>
                <StyledParagraph>
                  Nazwa użytkownika:{' '}
                  <StyledSpan>{order.data.user.username}</StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  E-mail: <StyledSpan>{order.data.user.email}</StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  Miasto:{' '}
                  <StyledSpan>{order.data.shippingAddress.city}</StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  Adres:{' '}
                  <StyledSpan>{order.data.shippingAddress.address}</StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  Kod Pocztowy:{' '}
                  <StyledSpan>
                    {order.data.shippingAddress.postalCode}
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  Metoda Płatności:{' '}
                  <StyledSpan>{order.data.paymentMethod}</StyledSpan>
                </StyledParagraph>
              </ShippingDataWrapper>

              <OrderSummary noButton goToPayment order={order} />
            </SummaryDataWrapper>
          </SummaryOrderWrapper>
        </PagesWrapper>
      )}
    </>
  )
}

export default OrderPage
