import { Header } from 'components/atoms/Header'
import OrderedItem from 'components/molecules/OrderedItem'
import OrderSummary from 'components/molecules/OrderSummary'
import React from 'react'
import styled from 'styled-components'

const DUMMY_DATA = [
  {
    id: 1,
    amount: 2,
    dish: 'Stek',
    price: 70,
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg',
  },
  {
    id: 2,
    amount: 1,
    dish: 'Burger',
    price: 33,
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg',
  },
]

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

const StyledHeader = styled(Header)`
  margin: 20px;
`

const OrderCheckout = () => {
  // make an array of dishes prices which is passed to OrderSummary component
  let prices = []
  const flatPrices = () =>
    DUMMY_DATA.filter(({ price }) => {
      if (price) {
        return prices.push(price)
      } else {
        return (prices = [0])
      }
    })
  flatPrices()

  return (
    <Wrapper>
      <ItemWrapper>
        {DUMMY_DATA.length !== 0 ? (
          DUMMY_DATA.map(({ id, amount, dish, price, image }) => (
            <OrderedItem
              key={id}
              image={image}
              amount={amount}
              dish={dish}
              price={price}
            />
          ))
        ) : (
          <StyledHeader>Nie ma żadnych dań w koszyku</StyledHeader>
        )}
      </ItemWrapper>

      <OrderSummary priceAmount={prices} />
    </Wrapper>
  )
}

export default OrderCheckout
