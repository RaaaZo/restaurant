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
`

const StyledInfoText = styled(Paragraph)`
  color: ${({ theme }) => theme.accentsDark};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 40px auto;

  @media (min-width: 768px) {
    margin: 80px auto;
  }

  @media (min-width: 1024px) {
    margin: 100px auto;
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
  padding: 0 20px;
`

const StyledIframe = styled.iframe`
  width: 95%;
  max-width: 1280px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.accentsLight};
`

const ContactPage = () => {
  return (
    <PagesWrapper>
      <HeroImage src='https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg' />
      <ContentWrapper>
        <StyledHeader pageHeader>Kontakt</StyledHeader>

        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </StyledParagraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>Phone:</StyledHeader>
              <StyledInfoText>123456789</StyledInfoText>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>

        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </StyledParagraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>E-mail:</StyledHeader>
              <StyledInfoText>restaurant@test.com</StyledInfoText>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>

        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          necessitatibus vero ex fuga, consectetur quod laborum illum dolorem
          placeat saepe nihil ratione debitis adipisci sapiente. Nihil
          voluptatum quae perspiciatis?
        </StyledParagraph>

        <SectionsImage
          url={`https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}
        >
          <InnerWrapper>
            <TextWrapper>
              <StyledHeader>Godziny otwarcia:</StyledHeader>
              <StyledInfoText>Pon-Czw: 12-23</StyledInfoText>
              <StyledInfoText>Pt-Niedz: 12-24</StyledInfoText>
            </TextWrapper>
          </InnerWrapper>
        </SectionsImage>
      </ContentWrapper>
      <StyledHeader pageHeader>Mapa:</StyledHeader>
      <StyledIframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.9418668078099!2d18.543520185217204!3d54.519962203557505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73b2552943b%3A0xdc60ea0c36215341!2sskwer%20Ko%C5%9Bciuszki%2026%2C%2081-370%20Gdynia!5e0!3m2!1spl!2spl!4v1605049426337!5m2!1spl!2spl'
        width='1280'
        height='450'
        frameborder='0'
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
      ></StyledIframe>
    </PagesWrapper>
  )
}

export default ContactPage
