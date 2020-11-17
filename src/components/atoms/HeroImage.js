import styled from 'styled-components'

export const HeroImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`
