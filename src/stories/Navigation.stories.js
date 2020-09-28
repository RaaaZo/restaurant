import React from "react";
import Navigation from "components/organisms/Navigation";

export default {
  title: "Organisms/Navigation",
  component: Navigation
};

export const LightMode = () => <Navigation />;
export const DarkMode = () => <Navigation darkMode={true} />;
