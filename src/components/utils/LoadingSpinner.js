import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  z-index: 9999;
`

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Loader type='Puff' color='#25C685' height={100} width={100} />
    </Wrapper>
  )
}

export default LoadingSpinner
