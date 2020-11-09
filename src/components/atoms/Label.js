import styled from "styled-components";

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
