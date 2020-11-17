import styled from 'styled-components'

export const HeroImage = styled.img`
  width: 100%;
  height: 250px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1360px) {
    height: 500px;
  }
`
