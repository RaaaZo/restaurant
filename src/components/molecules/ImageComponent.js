import { Image } from "components/atoms/ImageAtoms/Image";
import { ImageContainer } from "components/atoms/ImageAtoms/ImageContainer";
import { ImageTxt } from "components/atoms/ImageAtoms/ImageTxt";
import React from "react";

const ImageComponent = ({ imageWithText, url }) => {
  return (
    <ImageContainer imageWithText={imageWithText}>
      <Image imageWithText={imageWithText} src={url} />
      {imageWithText && <ImageTxt>Menu</ImageTxt>}
    </ImageContainer>
  );
};

export default ImageComponent;
