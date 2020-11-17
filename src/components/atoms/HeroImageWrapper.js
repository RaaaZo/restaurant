const { default: styled } = require('styled-components')

export const HeroImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: transparent;

  @media (min-width: 768px) {
    height: 400px;
    margin-bottom: 40px;
  }

  @media (min-width: 1360px) {
    height: 500px;
  }
`
