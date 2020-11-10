import styled from 'styled-components'

export const Button = styled.button`
  width: 200px;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.accentsLight};
  border: 2px solid ${({ theme }) => theme.accentsDark};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundLight};
    border-color: ${({ theme }) => theme.navigationDark};
  }

  @media (min-width: 410px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }

  @media (min-width: 768px) {
    width: 300px;
    padding: 20px 0;
  }

  @media (min-width: 1024px) {
    width: 350px;
    padding: 20px 0;
  }
`
