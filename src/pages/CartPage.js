import { Header } from "components/atoms/Header";
import { HeroImage } from "components/atoms/HeroImage";
import { PagesWrapper } from "components/atoms/PagesWrapper";
import OrderCheckout from "components/organisms/OrderCheckout";
import React from "react";
import styled from "styled-components";

const StyledHeroImage = styled(HeroImage)`
  margin-bottom: 40px;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 3px solid ${({ theme }) => theme.accentsLight};
  border-radius: 25px;
`;

const CartPage = () => {
  return (
    <PagesWrapper>
      <StyledHeroImage src="https://cdn.pixabay.com/photo/2014/05/30/07/23/pizza-boxes-358029_960_720.jpg" />
      <StyledHeader>Twoje zamówienie:</StyledHeader>
      <OrderCheckout />
    </PagesWrapper>
  );
};

export default CartPage;
