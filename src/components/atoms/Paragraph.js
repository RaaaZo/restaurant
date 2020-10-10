import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  text-align: justify;
  text-align-last: center;

  @media (min-width: 410px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: #fff;
    `}
`;
