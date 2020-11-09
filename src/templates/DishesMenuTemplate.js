import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Header } from "components/atoms/Header";
import { HeroImage } from "components/atoms/HeroImage";
import { PagesWrapper } from "components/atoms/PagesWrapper";
import DishCard from "components/organisms/DishCard";
import { Paragraph } from "components/atoms/Paragraph";

const DishCardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 40px 5px;

  @media (min-width: 1024px) {
    flex-flow: row wrap;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const StyledHeader = styled(Header)`
  margin: 20px auto;
  padding: 0 10px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 30px auto;
  padding: 0 10px;
`;

const DishesMenuTemplate = ({
  data,
  headerText,
  paragraphTopText,
  paragraphBottomText
}) => {
  return (
    <PagesWrapper>
      <HeroImage src="https://cdn.pixabay.com/photo/2018/07/23/17/05/noodles-3557358_960_720.jpg" />
      <InnerWrapper>
        <StyledHeader>{headerText}</StyledHeader>
        <StyledParagraph>{paragraphTopText}</StyledParagraph>
        <DishCardsWrapper>
          {data.map(({ id, name, desc, img }) => (
            <DishCard key={id} name={name} desc={desc} img={img} />
          ))}
        </DishCardsWrapper>
        <StyledParagraph>{paragraphBottomText}</StyledParagraph>
      </InnerWrapper>
    </PagesWrapper>
  );
};

DishesMenuTemplate.propTypes = {
  data: PropTypes.array.isRequired,
  headerText: PropTypes.string.isRequired,
  paragraphTopText: PropTypes.string.isRequired,
  paragraphBottomText: PropTypes.string.isRequired
};

export default DishesMenuTemplate;