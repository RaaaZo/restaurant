import { Button } from "components/atoms/Button";
import { Header } from "components/atoms/Header";
import { Paragraph } from "components/atoms/Paragraph";
import React from "react";
import styled from "styled-components";
import ImageComponent from "./ImageComponent";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.accentsLight};

  @media (min-width: 768px) {
    width: 40%;
    height: 800px;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;

const StyledHeader = styled(Header)`
  margin-top: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 90%;
  text-align: justify;
  text-align-last: center;
  margin: 15px;
`;

// przerzucic Container do oddzielnych stron menu tj. dania glowne, przystawki itp i przez propsy podawac dane do wyswietlenia

const MenuItemCard = () => {
  return (
    <Container>
      <Wrapper>
        <StyledHeader>Nazwa dania</StyledHeader>
        <ImageComponent
          url="https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"
          alt=""
        />
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          assumenda quos deserunt non numquam impedit id nam quis magnam
          deleniti!
        </StyledParagraph>
        <Button>Zamów</Button>
      </Wrapper>
    </Container>
  );
};

export default MenuItemCard;
