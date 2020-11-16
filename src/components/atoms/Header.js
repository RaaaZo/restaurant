import styled from 'styled-components'

export const Header = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  font-weight: 700;
  text-align: center;
  text-align-last: center;
  margin-top: 50px;

  @media (min-width: 410px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxxl};
  }
`
