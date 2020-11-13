import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { Paragraph } from 'components/atoms/Paragraph'
import { useHistory } from 'react-router-dom'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { BottomImage } from 'components/atoms/BottomImg'
import { PhotosWrapper } from 'components/atoms/PhotosWrapper'

import welcomeBackground from 'assets/img/welcome-background.jpg'
import homeHero from 'assets/img/hero_home-min.jpg'

gsap.registerPlugin(ScrollTrigger)

const WelcomeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${welcomeBackground});
  background-position: center;
  background-size: cover;
  z-index: 9999;

  ${({ welcomeAnimated }) =>
    welcomeAnimated &&
    css`
      display: none;
    `}
`

const WelcomeHeader = styled(Header)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat', sans-serif;
  color: #fff;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const StyledHeader = styled(Header)`
  position: relative;
  margin: 20px;
  padding-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.backgroundDark};
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 20px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.accentsDark};
  border: 2px solid ${({ theme }) => theme.accentsDark};
  display: block;
  margin: 20px auto;

  @media (min-width: 768px) {
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-top: 100px;
  }
`

const HomePage = () => {
  const history = useHistory()
  const bottomImages = useRef([])
  const welcomeModal = useRef([])
  bottomImages.current = []

  const welcomeAnimated = sessionStorage.getItem('welcomeAnimated' || false)

  function addToRef(el) {
    if (el && !bottomImages.current.includes(el)) {
      bottomImages.current.push(el)
    }
  }

  useEffect(() => {
    gsap.set(bottomImages.current, { scale: 0 })

    const tl = gsap.timeline()

    if (window.innerWidth < 1280) {
      gsap.to(bottomImages.current, {
        scale: 1,
        duration: 0.7,
        stagger: 1.2,
        scrollTrigger: {
          id: 'item',
          trigger: bottomImages.current,
          start: 'top center+=400',
          toggleActions: 'play none none reverse',
        },
      })
    }

    if (window.innerWidth >= 1280) {
      gsap.to(bottomImages.current, {
        scale: 1,
        duration: 0.7,
        stagger: 0.8,
        scrollTrigger: {
          id: 'item',
          trigger: bottomImages.current,
          start: 'top center+=400',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(bottomImages.current[0], {
        x: '-=110%',
        rotate: 0,
        duration: 0.7,
      })
        .to(bottomImages.current[1], { rotate: 0, duration: 0.7 })
        .to(bottomImages.current[2], { x: '+=110%', rotate: 0, duration: 0.7 })
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('welcomeAnimated', true)

    if (!welcomeAnimated) {
      const [firstElement, secondElement] = welcomeModal.current.children

      gsap.set([firstElement, secondElement], { scale: 0 })

      const tl = gsap.timeline()

      tl.fromTo(
        firstElement,
        { scale: 0 },
        { scale: 1, duration: 0.7, delay: 0.3 }
      )
        .to(firstElement, { scale: 0, duration: 0.7, delay: 1.2 })
        .fromTo(
          secondElement,
          { scale: 0 },
          { scale: 1, duration: 0.7, delay: 0.3 }
        )
        .to(secondElement, { scale: 0, duration: 0.7, delay: 1.5 })
        .to(welcomeModal.current, {
          y: '-=200%',
          duration: 2.5,
          delay: 0.4,
        })
    }
  }, [welcomeAnimated])

  return (
    <>
      <WelcomeModal welcomeAnimated={welcomeAnimated} ref={welcomeModal}>
        <WelcomeHeader>
          Witamy na stronie restauracji (Nazwa restauracji).
        </WelcomeHeader>
        <WelcomeHeader>
          Zamów swoje ulubione posiłki za pomocą jedynie paru kliknięć!
        </WelcomeHeader>
      </WelcomeModal>

      <PagesWrapper>
        <HeroImage src={homeHero} alt='Home hero image at the top of page' />
        <InnerWrapper>
          <StyledHeader>Lorem, ipsum dolor.</StyledHeader>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            obcaecati fugiat culpa voluptate nesciunt. Modi expedita iste odit
            velit dicta.
          </StyledParagraph>
          <HeroImage
            src='https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Tofu Ramen'
          />
          <StyledParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            fugit numquam ducimus sed quaerat beatae qui? Perspiciatis ipsa
            neque nesciunt, reprehenderit explicabo quae consequuntur dolores
            rem recusandae officia laudantium praesentium fugit harum.
            Necessitatibus nostrum est optio? Facere quod numquam qui!
          </StyledParagraph>

          <PhotosWrapper>
            <BottomImage
              homeBottomImages
              src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='Żeberka z warzywami'
              ref={addToRef}
            />
            <BottomImage
              homeBottomImages
              secondImage={true}
              src='https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='Bruschetta z pesto'
              ref={addToRef}
            />
            <BottomImage
              homeBottomImages
              thirdImage={true}
              src='https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='Dziczyzna z frytkami'
              ref={addToRef}
            />
          </PhotosWrapper>

          <StyledButton onClick={() => history.push('/menu')}>
            Zobacz Menu
          </StyledButton>
        </InnerWrapper>
      </PagesWrapper>
    </>
  )
}

export default HomePage
