import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { Paragraph } from 'components/atoms/Paragraph'

gsap.registerPlugin(ScrollTrigger)

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #121212;
  margin: 20px auto;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`

const StyledHeader = styled(Header)`
  padding: 0 10px;
`

const StyledParagraph = styled(Paragraph)`
  padding: 0 10px;
`

const StyledButton = styled(Button)`
  margin: 20px;
`

const DishCard = ({ name, desc, img }) => {
  const dishRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      dishRef.current,
      { scale: 0 },
      {
        scale: 1,
        transformOrigin: 'center',
        duration: 1,
        scrollTrigger: {
          id: 'element',
          trigger: dishRef.current,
          start: 'top-=200 center+=350',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <Wrapper ref={dishRef}>
      <Img src={img} alt='' />
      <StyledHeader>{name}</StyledHeader>
      <StyledParagraph>{desc}</StyledParagraph>
      <StyledButton>Zamów</StyledButton>
    </Wrapper>
  )
}

DishCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default DishCard
