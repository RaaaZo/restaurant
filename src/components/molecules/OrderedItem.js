import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { Header } from 'components/atoms/Header'
import { useDispatch } from 'react-redux'
import { removeDishFromCart } from 'ducks/actions/orderActions'

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundDark};
  padding-bottom: 15px;

  ${({ goToPayment }) =>
    goToPayment &&
    css`
      width: 90%;
      margin: 20px;
    `}
`

const StyledHeader = styled(Header)`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`

const StyledImage = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.accentsLight};
`

const RemoveHeader = styled(Header)`
  color: red;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  /* padding: 20px 40px 20px 0; */
  cursor: pointer;
`

const OrderedItem = ({ id, dish, price, image, qty, goToPayment }) => {
  const dispatch = useDispatch()

  const dishSliced = dish.slice(0, 7)

  const removeButtonHandler = () => {
    dispatch(removeDishFromCart(id))
  }

  return (
    <>
      {dish && (
        <Wrapper goToPayment>
          <StyledImage src={image} alt={dish} />
          <StyledHeader>x{qty}</StyledHeader>
          <StyledHeader>
            {dish.length > 7 ? `${dishSliced}...` : dish}
          </StyledHeader>
          <StyledHeader>{price}zł</StyledHeader>
          {goToPayment ? null : (
            <RemoveHeader onClick={removeButtonHandler}>Usuń</RemoveHeader>
          )}
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
