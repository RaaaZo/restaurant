import styled from "styled-components";

export const PhotosWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    height: 450px;
  }

  @media (min-width: 1024px) {
    height: 550px;
  }

  @media (min-width: 1110px) {
    height: 650px;
  }
`;
