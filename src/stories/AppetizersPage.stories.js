import React from "react";
import AppetizersPage from "pages/AppetizersPage";
import Navigation from "components/organisms/Navigation";
import Footer from "components/organisms/Footer";

export default {
  title: "pages/AppetizersPage",
  component: AppetizersPage,
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

export const LightMode = () => <AppetizersPage />;
