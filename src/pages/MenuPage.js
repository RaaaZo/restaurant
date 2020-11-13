import React, { useRef } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { Paragraph } from 'components/atoms/Paragraph'
import ImageComponent from 'components/molecules/ImageComponent'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BottomImage } from 'components/atoms/BottomImg'
import { PhotosWrapper } from 'components/atoms/PhotosWrapper'

import menuHero from 'assets/img/hero_menu-min.jpg'

gsap.registerPlugin(ScrollTrigger)

const DUMMY_DATA = [
  {
    id: 1,
    imageWithText: 'Przystawki',
    url:
      'https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    pathname: '/appetizers',
  },
  {
    id: 2,
    imageWithText: 'Zupy',
    url:
      'https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    pathname: '/soups',
  },
  {
    id: 3,
    imageWithText: 'Dania główne',
    url:
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    pathname: '/main',
  },
  {
    id: 4,
    imageWithText: 'Sałatki',
    url:
      'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    pathname: '/salads',
  },
  {
    id: 5,
    imageWithText: 'Desery',
    url:
      'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    pathname: '/desserts',
  },
]

const StyledHeader = styled(Header)`
  position: relative;
  margin: 40px 20px;
  text-align: justify;
  text-align-last: center;

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
`

const MenuWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const StyledBottomImage = styled(BottomImage)`
  transform: rotate(0) translate(-50%, -50%);
`

const MenuPage = () => {
  const menuRef = useRef([])
  menuRef.current = []
  const bottomImagesRef = useRef([])
  bottomImagesRef.current = []

  function addToMenuRef(el) {
    if (el && !menuRef.current.includes(el)) {
      menuRef.current.push(el)
    }
  }

  function addToImagesRef(el) {
    if (el && !bottomImagesRef.current.includes(el)) {
      bottomImagesRef.current.push(el)
    }
  }

  useEffect(() => {
    menuRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            id: `${index}`,
            trigger: el,
            start: 'top center+=350',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  useEffect(() => {
    gsap.set(bottomImagesRef.current, { autoAlpha: 0, x: '+=100%' })

    const tl = gsap.timeline()

    tl.to(bottomImagesRef.current[0], {
      autoAlpha: 1,
      x: 0,
      duration: 1,
    })
      .to(bottomImagesRef.current[0], {
        autoAlpha: 1,
        x: '-=250%',
        duration: 1,
        delay: 1.5,
      })
      .to(
        bottomImagesRef.current[1],
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        '-=0.8'
      )
      .to(bottomImagesRef.current[1], {
        autoAlpha: 1,
        x: '-=250%',
        duration: 1,
        delay: 1.5,
      })
      .to(
        bottomImagesRef.current[2],
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        '-=0.8'
      )
      .to(bottomImagesRef.current[2], {
        autoAlpha: 1,
        x: '-=200%',
        duration: 1,
        delay: 1.5,
      })
      .repeat(-1)
  }, [])

  return (
    <PagesWrapper>
      <HeroImage src={menuHero} alt='Menu hero image at the top of the page' />
      <InnerWrapper>
        <StyledHeader>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis
          at ipsa porro fugiat sit iure maiores ratione ea cumque!
        </StyledHeader>

        <StyledParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          similique natus nemo, deleniti minus eveniet maiores voluptatum nobis,
          veritatis enim, dolor consequuntur eum voluptate explicabo aperiam
          maxime repudiandae nesciunt accusantium! Sint iste voluptatibus
          deleniti labore molestiae autem odio hic blanditiis.
        </StyledParagraph>

        <MenuWrapper>
          {DUMMY_DATA.map(({ pathname, id, imageWithText, url }) => (
            <ImageComponent
              pathname={pathname}
              ref={addToMenuRef}
              key={id}
              imageWithText={imageWithText}
              url={url}
            />
          ))}
        </MenuWrapper>

        <StyledParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero neque
          explicabo facere accusantium nesciunt dolore fugiat laborum! Adipisci,
          nesciunt dignissimos. Vel, nobis! Error ut quos animi, illo delectus
          dicta facilis repellendus quis minus consequuntur distinctio, enim
          fuga voluptatibus magnam maiores?
        </StyledParagraph>
        <PhotosWrapper>
          <StyledBottomImage
            src='https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Szaszłyki'
            ref={addToImagesRef}
          />
          <StyledBottomImage
            src='https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Ramen'
            ref={addToImagesRef}
          />
          <StyledBottomImage
            src='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Dziczyzna'
            ref={addToImagesRef}
          />
        </PhotosWrapper>
      </InnerWrapper>
    </PagesWrapper>
  )
}

export default MenuPage
