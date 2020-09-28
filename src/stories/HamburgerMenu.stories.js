import React from "react";
import { HamburgerMenu } from "components/atoms/NavigationItems/HamburgerMenu";

export default {
  title: "atoms/HamburgerMenu",
  component: HamburgerMenu
};

export const LightMode = () => <HamburgerMenu />;

export const DarkMode = () => <HamburgerMenu darkMode={true} />;

export const Open = () => <HamburgerMenu isOpen={true} />;
