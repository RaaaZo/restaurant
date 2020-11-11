import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header } from 'components/atoms/Header'

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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.accentsDark};
`

const OrderedItem = ({ amount, dish, price, image }) => {
  return (
    <>
      {dish && (
        <Wrapper>
          <StyledImage src={image} alt={dish} />
          <StyledHeader>{amount}x</StyledHeader>
          <StyledHeader>{dish}</StyledHeader>
          <StyledHeader>{price}zł</StyledHeader>
        </Wrapper>
      )}
    </>
  )
}

OrderedItem.propTypes = {
  amount: PropTypes.number.isRequired,
  dish: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default OrderedItem
