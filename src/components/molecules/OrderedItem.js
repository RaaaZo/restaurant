import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Header } from "components/atoms/Header";

const Wrapper = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const OrderedItem = ({ amount, dish, price }) => {
  return (
    <>
      {dish && (
        <Wrapper>
          <StyledHeader>{amount || "unknown"}</StyledHeader>
          <StyledHeader>{dish || "unknown"}</StyledHeader>
          <StyledHeader>{price || "unknown"}</StyledHeader>
        </Wrapper>
      )}
    </>
  );
};

OrderedItem.propTypes = {
  amount: PropTypes.number,
  dish: PropTypes.string,
  price: PropTypes.number
};

OrderedItem.defaultProps = {
  amount: "unknown",
  dish: "unknown",
  price: "unknown"
};

export default OrderedItem;
