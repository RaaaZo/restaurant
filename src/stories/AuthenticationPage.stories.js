import React from "react";
import AuthenticationPage from "pages/AuthenticationPage";
import Navigation from "components/organisms/Navigation";
import Footer from "components/organisms/Footer";

export default {
  title: "pages/AuthenticationPage",
  component: AuthenticationPage,
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

export const LightMode = () => <AuthenticationPage />;
