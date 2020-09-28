import React from "react";
import { Image } from "components/atoms/ImageAtoms/Image";
import { ImageContainer } from "components/atoms/ImageAtoms/ImageContainer";
import { ImageTxt } from "components/atoms/ImageAtoms/ImageTxt";

export default {
  title: "atoms/Image",
  component: Image,
};

export const WithoutText = () => (
  <ImageContainer>
    <Image src="https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg" />
  </ImageContainer>
);

export const WithText = () => (
  <ImageContainer withText>
    <Image
      withText
      src="https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg"
    />
    <ImageTxt>Menu</ImageTxt>
  </ImageContainer>
);
