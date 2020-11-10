import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Paragraph } from 'components/atoms/Paragraph'

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;

  &:first-of-type {
    margin-top: 40px;
  }
`

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  }
`

const OrderSummaryItem = ({ title, price }) => {
  return (
    <>
      <InnerWrapper>
        <StyledParagraph>{title}:</StyledParagraph>
        <StyledParagraph>{price} zł</StyledParagraph>
      </InnerWrapper>
    </>
  )
}

OrderSummaryItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}

export default OrderSummaryItem
