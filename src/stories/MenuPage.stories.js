import React from "react";
import MenuPage from "pages/MenuPage";
import Navigation from "components/organisms/Navigation";
import Footer from "components/organisms/Footer";

export default {
  title: "pages/MenuPage",
  component: MenuPage,
  decorators: [
    Story => (
      <>
        <Navigation />
        <Story />
        <Footer />
      </>
    )
  ]
};

export const LightMode = () => <MenuPage />;
