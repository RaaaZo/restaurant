import styled, { css } from "styled-components";

export const BottomImage = styled.img`
  width: 80%;
  max-width: 900px;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  object-fit: cover;
  object-position: center;
  border-radius: 20px;

  @media (min-width: 600px) {
    width: 60%;
  }

  ${({ secondImage }) =>
    secondImage &&
    css`
      transform: translate(-50%, -50%) rotate(15deg);
    `}
  ${({ thirdImage }) =>
    thirdImage &&
    css`
      transform: translate(-50%, -50%) rotate(-7deg);
    `}
`;
