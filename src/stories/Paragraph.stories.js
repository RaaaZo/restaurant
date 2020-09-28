import { Paragraph } from "components/atoms/Paragraph";
import React from "react";

export default {
  title: "atoms/Paragraph",
  component: Paragraph
};

export const LightMode = () => (
  <Paragraph>Najlepsza restauracja w mieście</Paragraph>
);

export const DarkMode = () => (
  <Paragraph darkMode={true}>Najlepsza restauracja w mieście</Paragraph>
);
