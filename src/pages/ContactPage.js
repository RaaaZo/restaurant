import { Header } from "components/atoms/Header";
import { HeroImage } from "components/atoms/HeroImage";
import { PagesWrapper } from "components/atoms/PagesWrapper";
import { Paragraph } from "components/atoms/Paragraph";
import React from "react";
import styled, { css } from "styled-components";

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ComponentsWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 60px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledHeader = styled(Header)`
  margin: 20px auto 10px auto;

  ${({ bottomHeader }) =>
    bottomHeader &&
    css`
      font-size: ${({ theme: { fontSize } }) => fontSize.l};

      @media (min-width: 768px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl};
      }
    `}

  ${({ topHeader }) =>
    topHeader &&
    css`
      margin: 50px;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px;
  color: ${({ theme }) => theme.accentsDark};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`;

const GoogleMaps = styled.div`
  width: 100%;
  max-width: 400px;
  height: 200px;
  background-color: grey;
  margin-top: 40px;

  @media (min-width: 768px) {
    max-width: 600px;
    height: 300px;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.accentsDark};
`;

const ContactPage = () => {
  return (
    <PagesWrapper>
      <HeroImage src="https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg" />
      <StyledHeader topHeader={true}>Kontakt</StyledHeader>
      <ComponentsWrapper>
        <InnerWrapper>
          <StyledHeader bottomHeader={true}>Telefon:</StyledHeader>
          <StyledParagraph>123456789</StyledParagraph>
        </InnerWrapper>

        <InnerWrapper>
          <StyledHeader bottomHeader={true}>E-mail:</StyledHeader>
          <StyledParagraph>restaurant@test.com</StyledParagraph>
        </InnerWrapper>

        <InnerWrapper>
          <StyledHeader bottomHeader={true}>Godziny otwarcia:</StyledHeader>
          <List>
            <li>
              Poniedziałek: <StyledSpan>12-20</StyledSpan>
            </li>
            <li>
              Wtorek: <StyledSpan> 10-18</StyledSpan>
            </li>
            <li>
              Środa: <StyledSpan> 10-18</StyledSpan>
            </li>
            <li>
              Czwartek: <StyledSpan> 10-18</StyledSpan>
            </li>
            <li>
              Piątek: <StyledSpan> 12-22</StyledSpan>
            </li>
            <li>
              Sobota: <StyledSpan> 10-22</StyledSpan>
            </li>
            <li>
              Niedziela: <StyledSpan> 12-20</StyledSpan>
            </li>
          </List>
        </InnerWrapper>
      </ComponentsWrapper>

      <StyledHeader bottomHeader={true}>Lokalizacja:</StyledHeader>
      <StyledParagraph>adres</StyledParagraph>
      <GoogleMaps />
    </PagesWrapper>
  );
};

export default ContactPage;
