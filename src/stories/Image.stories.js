import React from "react";
import { Image } from "components/atoms/ImageAtoms/Image";
import { ImageContainer } from "components/atoms/ImageAtoms/ImageContainer";
import { ImageTxt } from "components/atoms/ImageAtoms/ImageTxt";
import ImageComponent from "components/molecules/ImageComponent";

export default {
  title: "atoms/Image",
  component: Image
};

export const WithoutText = () => (
  <ImageComponent src="https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg" />
);

export const WithText = () => (
  <ImageComponent
    imageWithText={true}
    src="https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg"
  />
);
