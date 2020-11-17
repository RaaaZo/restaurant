import styled from 'styled-components'

export const Paragraph = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  text-align: justify;
  text-align-last: center;

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`
