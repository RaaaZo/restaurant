import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.navigationLight};
`

const StyledLink = styled.a`
  margin: 0 auto;
  color: #121212;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink href='https://github.com/RaaaZo' target='_blank'>
        Mateusz Koprowicz©
      </StyledLink>
    </Wrapper>
  )
}

export default Footer
