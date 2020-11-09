import styled from "styled-components";

export const ImageTxt = styled.h3`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  font-family: "Montserrat", sans-serif;
  transform: translate(-50%, -50%);
  font-size: ${({ theme: { fontSize } }) => fontSize.xxxxl};
  color: #fff;
  text-align: center;
`;
