import styled from 'styled-components'

export const SectionsImage = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 300px;
  margin: 20px auto;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 15px;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1360px) {
    height: 450px;
  }
`
