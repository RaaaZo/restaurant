import { HamburgerMenu } from "components/atoms/NavigationItems/HamburgerMenu";
import { NavigationModal } from "components/atoms/NavigationItems/NavigationModal";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navigationLight};

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.navigationDark};
    `}
`;

const HamburgerWrapper = styled.div`
  padding: 20px 5px;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  z-index: 999;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(-150px);
    `}
`;

const StyledHamburger = styled(HamburgerMenu)`
  margin-right: 20px;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <NavigationModal
        darkMode={true}
        data-testid="navigation-modal"
        isOpen={isOpen}
      />

      <Wrapper data-testid="navigation-wrapper" darkMode={true}>
        <p>Logo</p>
        <HamburgerWrapper
          data-testid="navigation-hamburger"
          isOpen={isOpen}
          onClick={handleIsOpen}
        >
          <StyledHamburger isOpen={isOpen} />
        </HamburgerWrapper>
      </Wrapper>
    </>
  );
};

export default Navigation;
