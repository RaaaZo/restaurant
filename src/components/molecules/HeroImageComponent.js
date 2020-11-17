import React from 'react'
import { HeroImage } from 'components/atoms/HeroImage'
import { HeroImageWrapper } from 'components/atoms/HeroImageWrapper'

const HeroImageComponent = ({ image, alternative }) => {
  return (
    <HeroImageWrapper>
      <HeroImage src={image} alt={alternative} />
    </HeroImageWrapper>
  )
}

export default HeroImageComponent
