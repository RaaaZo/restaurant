import React from "react";
import HomePage from "pages/HomePage";
import Navigation from "components/organisms/Navigation";

export default {
  title: "pages/HomePage",
  component: HomePage,
  decorators: [
    Story => (
      <>
        <Navigation />
        <Story />
      </>
    )
  ]
};

export const LightMode = () => <HomePage />;
