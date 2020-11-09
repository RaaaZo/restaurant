import React from "react";
import { ReactComponent as ArrowSvg } from "assets/svg/arrow-up.svg";
import styled, { css } from "styled-components";

const StyledSvg = styled(ArrowSvg)`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 5%;
  right: 0;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    right: 2%;
    bottom: 4%;
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      fill: #fff;
    `}
`;

const ArrowUp = () => {
  function pushToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <StyledSvg darkMode={false} onClick={pushToTop} />;
};

export default ArrowUp;
