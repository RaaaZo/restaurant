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
  margin: 40px;

  @media (min-width: 768px) {
    height: 400px;

    @media (min-width: 1024px) {
      width: 42%;
      margin: 40px 20px;
    }

    ${({ imageWithText }) =>
      imageWithText &&
      css`
        &:hover {
          transform: scale(1.02);
        }
      `}
  }
`;
