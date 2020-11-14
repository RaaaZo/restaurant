import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header } from 'components/atoms/Header'
import { useDispatch } from 'react-redux'
import { removeDishFromCart } from 'ducks/actions/orderActions'

const Wrapper = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundDark};
  padding-bottom: 15px;

  @media (min-width: 1024px) {
    width: 100%;
  }
`

const StyledHeader = styled(Header)`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`

const StyledImage = styled.img`
  display: block;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.accentsLight};
`

const RemoveHeader = styled(Header)`
  color: red;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  padding: 20px;
  cursor: pointer;
`

const OrderedItem = ({ id, dish, price, image, qty }) => {
  const dispatch = useDispatch()

  const removeButtonHandler = () => {
    dispatch(removeDishFromCart(id))
  }

  return (
    <>
      {dish && (
        <Wrapper>
          <StyledImage src={image} alt={dish} />
          <StyledHeader>x{qty}</StyledHeader>
          <StyledHeader>{dish}</StyledHeader>
          <StyledHeader>{price}zł</StyledHeader>
          <RemoveHeader onClick={removeButtonHandler}>Usuń</RemoveHeader>
        </Wrapper>
      )}
    </>
  )
}

OrderedItem.propTypes = {
  dish: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default OrderedItem
