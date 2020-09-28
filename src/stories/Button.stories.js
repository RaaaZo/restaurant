import { Button } from "components/atoms/Button";
import React from "react";

export default {
  title: "atoms/Button",
  component: Button
};

export const LightMode = () => <Button>Menu</Button>;

export const DarkMode = () => <Button darkMode={true}>Menu</Button>;
