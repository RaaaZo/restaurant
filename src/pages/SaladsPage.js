import React from "react";
import DishesMenuTemplate from "templates/DishesMenuTemplate";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Bruschetta",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, expedita!",
    img:
      "https://cdn.pixabay.com/photo/2017/03/10/06/20/bruschetta-2131893_960_720.jpg"
  },
  {
    id: 2,
    name: "Sauerbraten",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia quo! Aliquam deserunt odio non ea aperiam accusantium atque facere.",
    img:
      "https://cdn.pixabay.com/photo/2017/07/17/13/50/sauerbraten-2512441_960_720.jpg"
  },
  {
    id: 3,
    name: "Makaron z krewetkami",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia quo! Aliquam deserunt odio.",
    img:
      "https://cdn.pixabay.com/photo/2017/02/10/08/38/pasta-2054656_960_720.jpg"
  },
  {
    id: 4,
    name: "Bruschetta",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, expedita!",
    img:
      "https://cdn.pixabay.com/photo/2017/03/10/06/20/bruschetta-2131893_960_720.jpg"
  },
  {
    id: 5,
    name: "Sauerbraten",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia quo! Aliquam deserunt odio non ea aperiam accusantium atque facere.",
    img:
      "https://cdn.pixabay.com/photo/2017/07/17/13/50/sauerbraten-2512441_960_720.jpg"
  },
  {
    id: 6,
    name: "Makaron z krewetkami",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia quo! Aliquam deserunt odio.",
    img:
      "https://cdn.pixabay.com/photo/2017/02/10/08/38/pasta-2054656_960_720.jpg"
  }
];

const paragraphTopText =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?";
const paragraphBottomText =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?";

const SaladsPage = () => {
  return (
    <DishesMenuTemplate
      data={DUMMY_DATA}
      headerText="Sałatki"
      paragraphTopText={paragraphTopText}
      paragraphBottomText={paragraphBottomText}
    />
  );
};

export default SaladsPage;
