import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { Paragraph } from 'components/atoms/Paragraph'
import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHistory } from 'react-router-dom'
import welcomeBackground from 'assets/img/welcome-background.jpg'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { BottomImage } from 'components/atoms/BottomImg'
import { PhotosWrapper } from 'components/atoms/PhotosWrapper'

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

    ${({ darkMode }) =>
      darkMode &&
      css`
        background-color: ${({ theme }) => theme.accentsDark};
      `}
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

    if (window.innerWidth >= 1280) {
      gsap.to(bottomImages.current[0], {
        x: '-50%',
        delay: 0.8,
        duration: 1.2,
      })
      gsap.to(bottomImages.current[2], {
        x: '50%',
        delay: 3,
        duration: 1.2,
      })
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
        <WelcomeHeader darkMode>
          Witamy na stronie restauracji (Nazwa restauracji).
        </WelcomeHeader>
        <WelcomeHeader darkMode>
          Zamów swoje ulubione posiłki za pomocą jedynie paru kliknięć!
        </WelcomeHeader>
      </WelcomeModal>

      <PagesWrapper>
        <HeroImage
          src='https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg'
          alt=''
        />
        <InnerWrapper>
          <StyledHeader>Lorem, ipsum dolor.</StyledHeader>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            obcaecati fugiat culpa voluptate nesciunt. Modi expedita iste odit
            velit dicta.
          </StyledParagraph>
          <HeroImage
            src='https://cdn.pixabay.com/photo/2020/04/03/14/51/goulash-4999166_960_720.jpg'
            alt=''
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
              src='https://cdn.pixabay.com/photo/2018/06/27/20/24/goulash-3502510_960_720.jpg'
              alt=''
              ref={addToRef}
            />
            <BottomImage
              secondImage={true}
              src='https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg'
              alt=''
              ref={addToRef}
            />
            <BottomImage
              thirdImage={true}
              src='https://cdn.pixabay.com/photo/2018/06/18/21/53/fish-3483452_960_720.jpg'
              alt=''
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
