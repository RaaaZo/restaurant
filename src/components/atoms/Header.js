import styled, { css } from 'styled-components'

export const Header = styled.h3`
  position: relative;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxxl};
  font-weight: 700;
  text-align: center;
  text-align-last: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxxl};
  }

  ${({ mainHeader }) =>
    mainHeader &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.navigationDark};
      }
    `}
`
