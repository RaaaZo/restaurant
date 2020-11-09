import { Header } from "components/atoms/Header";
import OrderedItem from "components/molecules/OrderedItem";
import OrderSummary from "components/molecules/OrderSummary";
import React from "react";
import styled, { css } from "styled-components";

const DUMMY_DATA = [
  {
    id: 1,
    amount: 2,
    dish: "Stek",
    price: 120
  },
  {
    id: 2,
    amount: 1,
    dish: "Burger",
    price: 33
  }
];

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: white;
    `}
`;

const StyledHeader = styled(Header)`
  margin: 20px;
`;

const OrderCheckout = () => {
  // make an array of dishes prices which is passed to OrderSummary component
  let prices = [];
  const flatPrices = () =>
    DUMMY_DATA.filter(({ price }) => {
      if (typeof price !== "undefined") {
        return prices.push(price);
      } else {
        return (prices = [0]);
      }
    });
  flatPrices();

  return (
    <Wrapper>
      {DUMMY_DATA.length !== 0 ? (
        DUMMY_DATA.map(({ id, amount, dish, price }) => (
          <OrderedItem key={id} amount={amount} dish={dish} price={price} />
        ))
      ) : (
        <StyledHeader>Nie ma żadnych dań w koszyku</StyledHeader>
      )}
      <OrderSummary priceAmount={prices} />
    </Wrapper>
  );
};

export default OrderCheckout;
