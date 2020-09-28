import { Header } from "components/atoms/Header";
import React from "react";

export default {
  title: "atoms/Header",
  component: Header
};

export const LightMode = () => <Header>Najlepsza restauracja w mieście</Header>;

export const DarkMode = () => (
  <Header darkMode={true}>Najlepsza restauracja w mieście</Header>
);
