import styled from 'styled-components';

export const ImageTxt = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme: { fontSize } }) => fontSize.xxxxl};
  color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;
