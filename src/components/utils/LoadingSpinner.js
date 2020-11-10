import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Loader type='Puff' color='#25C685' height={100} width={100} />
    </Wrapper>
  )
}

export default LoadingSpinner
