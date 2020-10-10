import { Button } from "components/atoms/Button";
import { Header } from "components/atoms/Header";
import { Paragraph } from "components/atoms/Paragraph";
import ImageComponent from "components/molecules/ImageComponent";
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledHeader = styled(Header)`
  position: relative;
  margin: 20px;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.backgroundDark};

    ${({ darkMode }) =>
      darkMode &&
      css`
        background-color: ${({ theme }) => theme.accentsDark};
      `}
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 60px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <StyledHeroImage
        src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
        alt=""
      />
      <StyledHeader>Lorem, ipsum dolor.</StyledHeader>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        dolores?
      </StyledParagraph>
      <ImageComponent url="https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875_960_720.jpg" />
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        perspiciatis, iste impedit dolore fugiat eligendi.
      </StyledParagraph>
      <StyledButton>Menu</StyledButton>
    </Wrapper>
  );
};

export default HomePage;
