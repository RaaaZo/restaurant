import { Image } from "components/atoms/ImageAtoms/Image";
import { ImageContainer } from "components/atoms/ImageAtoms/ImageContainer";
import { ImageTxt } from "components/atoms/ImageAtoms/ImageTxt";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DarkModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

// eslint-disable-next-line react/display-name
const ImageComponent = React.forwardRef(
  ({ imageWithText, url, pathname }, ref) => {
    const history = useHistory();
    return (
      <ImageContainer
        onClick={() => history.push(pathname)}
        ref={ref}
        imageWithText={imageWithText}
      >
        <DarkModal />
        <Image src={url} />
        {imageWithText && <ImageTxt>{imageWithText}</ImageTxt>}
      </ImageContainer>
    );
  }
);

export default ImageComponent;
