import React from "react";
import DishCard from "components/organisms/DishCard";

export default {
  title: "organisms/DishCard",
  component: DishCard
};

export const LightMode = () => (
  <DishCard
    name="Stek"
    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum."
    img="https://cdn.pixabay.com/photo/2017/04/14/17/36/fish-2230852_960_720.jpg"
  />
);
