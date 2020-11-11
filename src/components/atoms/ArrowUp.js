import React from 'react'
import { ReactComponent as ArrowSvg } from 'assets/svg/arrow-up.svg'
import styled from 'styled-components'

const StyledSvg = styled(ArrowSvg)`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 5%;
  right: 0;
  background-color: rgb(255, 255, 255, 0.7);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    right: 2%;
    bottom: 4%;
  }
`

const ArrowUp = () => {
  function pushToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <StyledSvg onClick={pushToTop} />
}

export default ArrowUp
