import React from "react";
import OrderSummary from "components/molecules/OrderSummary";

export default {
  title: "molecules/OrderSummary",
  component: OrderSummary
};

export const LightMode = () => <OrderSummary />;

export const DarkMode = () => <OrderSummary />;
