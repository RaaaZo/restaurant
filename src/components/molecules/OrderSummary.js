import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import OrderSummaryItem from "./OrderSummaryItem";
import { Button } from "components/atoms/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 2px solid ${({ theme }) => theme.backgroundDark};

  ${({ darkMode }) =>
    darkMode &&
    css`
      border-color: ${({ theme }) => theme.accentsLight};
    `}
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const OrderSummary = ({ priceAmount }) => {
  let amount;
  const deliveryPrice = 10;
  if (priceAmount.length !== 0) {
    amount = priceAmount.reduce((total, amount) => total + amount);
  }

  function handleTotalPrice() {
    if (priceAmount.length !== 0) {
      return amount + deliveryPrice;
    }
    return deliveryPrice;
  }

  return (
    <Wrapper>
      <OrderSummaryItem title="Razem" price={amount || 0} />
      <OrderSummaryItem title="Koszt dostawy" price={10} />
      <OrderSummaryItem title="Kwota całkowita" price={handleTotalPrice()} />
      <StyledButton>Zapłać</StyledButton>
    </Wrapper>
  );
};

OrderSummary.propTypes = {
  priceAmount: PropTypes.array.isRequired
};

export default OrderSummary;
