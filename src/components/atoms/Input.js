import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 70%;
  max-width: 500px;
  margin: 0 auto;
  padding: 5px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  background-color: ${({ theme }) => theme.backgroundLight};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.accentsLight};
  border-radius: 15px;
  outline-color: ${({ theme }) => theme.accentsLight};
  transition: background-color 0.4s ease-in-out;

  &:focus {
    background-color: white;
  }

  @media (min-width: 410px) {
    padding: 8px 0;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 11px 0;
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      border-color: ${({ theme }) => theme.accentsDark};
      outline-color: ${({ theme }) => theme.accentsDark};
    `};
`;
