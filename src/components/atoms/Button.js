import styled, { css } from "styled-components";

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
    background-color: ${({ theme }) => theme.accentsDark};
    border-color: ${({ theme }) => theme.accentsLight};
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

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.accentsDark};
      border: 2px solid ${({ theme }) => theme.accentsLight};
      transition: background-color 0.4s ease-in-out,
        border-color 0.4s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.accentsLight};
        border-color: ${({ theme }) => theme.accentsDark};
      }
    `}
`;
