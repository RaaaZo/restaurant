import styled, { css } from "styled-components";

export const NavigationModal = styled.div`
  transform: translateX(150%);
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(68, 68, 68, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  transition: transform 0.4s ease-in-out;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background: rgb(18, 18, 18);
      background: linear-gradient(
        180deg,
        rgba(18, 18, 18, 1) 0%,
        rgba(242, 243, 251, 1) 100%
      );
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;
