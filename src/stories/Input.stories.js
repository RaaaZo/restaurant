import { Input } from "components/atoms/Input";
import React from "react";

export default {
  title: "atoms/Input",
  component: Input
};

export const LightMode = () => <Input placeholder="imię" />;
export const DarkMode = () => <Input darkMode={true} placeholder="imię" />;
