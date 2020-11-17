import { Field } from 'formik'
import styled from 'styled-components'

export const Input = styled(Field)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 12px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  background-color: ${({ theme }) => theme.backgroundLight};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.accentsLight};
  border-radius: 15px;
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;

  &:focus {
    background-color: white;
    border-color: #121212;
    box-shadow: 0 0 3pt 2pt #121212;
  }

  @media (min-width: 410px) {
    padding: 8px 0;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 11px 0;
  }
`
