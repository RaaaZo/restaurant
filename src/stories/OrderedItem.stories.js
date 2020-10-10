import React from "react";
import OrderedItem from "components/molecules/OrderedItem";

export default {
  title: "molecules/OrderedItem",
  component: OrderedItem
};

export const LightMode = () => (
  <OrderedItem amount={2} dish="Stek" price={20} />
);
