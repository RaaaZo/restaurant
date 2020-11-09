import React from "react";
import CartPage from "pages/CartPage";
import Navigation from "components/organisms/Navigation";
import Footer from "components/organisms/Footer";

export default {
  title: "pages/CartPage",
  component: CartPage,
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

export const LightMode = () => <CartPage />;
