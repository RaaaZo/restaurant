import styled, { css } from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 400px;

    ${({ imageWithText }) =>
      imageWithText &&
      css`
        &:hover {
          transform: scale(1.02);
        }
      `}
  }
`;
