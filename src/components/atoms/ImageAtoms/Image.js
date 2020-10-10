import styled, { css } from "styled-components";
import { ImageContainer } from "./ImageContainer";

export const Image = styled.img`
  width: 95%;
  height: 100%;
  object-fit: cover;
  object-position: 50%;
  border-radius: 5px;
  transition: filter 0.4s ease-in-out;

  ${({ imageWithText }) =>
    imageWithText &&
    css`
      ${ImageContainer}:hover & {
        filter: blur(1px);
      }
    `}
`;
