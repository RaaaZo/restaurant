import styled, { css } from "styled-components";

export const HamburgerMenu = styled.div`
  position: relative;
  width: 40px;
  height: 3px;
  background-color: ${({ theme }) => theme.navigationDark};
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.navigationDark};
    transition: 0.4s ease-in-out;

    ${({ darkMode }) =>
      darkMode &&
      css`
        background-color: ${({ theme }) => theme.accentsDark};
      `}
  }

  &::after {
    content: "";
    position: absolute;
    margin-left: 15px;
    bottom: -7px;
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.navigationDark};
    transition: 0.4s ease-in-out;

    ${({ darkMode }) =>
      darkMode &&
      css`
        background-color: ${({ theme }) => theme.accentsDark};
      `}
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.accentsDark};
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: transparent;
      &::before {
        content: "";
        transform: translateY(7px) rotate(45deg);
        background-color: #fff;
      }
      &::after {
        content: "";
        width: 40px;
        margin-left: 0;
        transform: translateY(-7px) rotate(-45deg);
        background-color: #fff;
      }
    `}
`;
