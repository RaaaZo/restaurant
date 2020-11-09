import React from "react";
import ContactPage from "pages/ContactPage";
import Navigation from "components/organisms/Navigation";
import Footer from "components/organisms/Footer";

export default {
  title: "pages/ContactPage",
  component: ContactPage,
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

export const LightMode = () => <ContactPage />;
