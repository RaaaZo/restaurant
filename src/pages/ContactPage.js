import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { Paragraph } from 'components/atoms/Paragraph'
import { SectionsImage } from 'components/atoms/SectionsImage'
import React from 'react'
import styled from 'styled-components'

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeader = styled(Header)`
  color: ${({ pageHeader }) => (pageHeader ? `#000` : `#fff`)};
  font-size: ${({ pageHeader, theme: { fontSize } }) =>
    pageHeader ? fontSize.xxxxl : fontSize.xxl};
  margin: ${({ pageHeader }) => pageHeader && `30px`};
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.accentsDark};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`

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
`

const TextWrapper = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 25px;
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const ContactPage = () => {
  return (
    <PagesWrapper>
      <HeroImage src='https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg' />
      <ContentWrapper>
        <StyledHeader pageHeader>Kontakt</StyledHeader>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </Paragraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>Phone:</StyledHeader>
              <StyledParagraph>123456789</StyledParagraph>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </Paragraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>E-mail:</StyledHeader>
              <StyledParagraph>restaurant@test.com</StyledParagraph>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </Paragraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>Godziny otwarcia:</StyledHeader>
              <StyledParagraph>Pon-Czw: 12-23</StyledParagraph>
              <StyledParagraph>Pt-Niedz: 12-24</StyledParagraph>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>
      </ContentWrapper>
      <StyledHeader pageHeader>Mapa:</StyledHeader>
      <GoogleMaps />
    </PagesWrapper>
  )
}

export default ContactPage
