import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Header } from "components/atoms/Header";

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const OrderSummaryItem = ({ title, price }) => {
  return (
    <>
      <InnerWrapper>
        <Header>{title}:</Header>
        <Header>{price} zł</Header>
      </InnerWrapper>
    </>
  );
};

OrderSummaryItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string
};

export default OrderSummaryItem;
