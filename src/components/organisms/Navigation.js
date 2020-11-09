import { HamburgerMenu } from 'components/atoms/NavigationItems/HamburgerMenu'
import NavigationModal from 'components/atoms/NavigationItems/NavigationModal'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navigationLight};
`

const HamburgerWrapper = styled.div`
  padding: 20px 5px;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  z-index: 999;

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(-150px);

      @media (min-width: 768px) {
        transform: translateX(-250px);
      }
    `}
`

const StyledHamburger = styled(HamburgerMenu)`
  margin-right: 20px;
`

const List = styled.ul`
  display: none;
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 150px;
  margin-right: 50px;

  @media (min-width: 1024px) {
    display: flex;
  }
`

const ListItem = styled(NavLink)`
  width: 15%;
  margin: 30px auto;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.navigationDark};
  border-bottom: 2px solid ${({ theme }) => theme.navigationDark};
  text-align: center;
  transition: transform 0.4s 0.1s ease-in-out, color 0.4s 0.1s ease-in-out,
    border 0.4s 0.1s ease-in-out;

  &.isActive {
    color: #fff;
    border-color: #fff;
  }

  &:hover {
    transform: scale(1.05);
    color: #fff;
    border-color: #fff;
  }

  @media (min-width: 1360px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    border-width: 3px;
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <NavigationModal closeModal={handleIsOpen} isOpen={isOpen} />

      <Wrapper>
        {/* logo backgroundDarkMode fill */}
        <p>Logo</p>

        <List>
          <ListItem exact to='/' activeClassName='isActive'>
            Home
          </ListItem>

          <ListItem exact to='/menu' activeClassName='isActive'>
            Menu
          </ListItem>

          <ListItem exact to='/contact' activeClassName='isActive'>
            Kontakt
          </ListItem>

          <ListItem exact to='/cart' activeClassName='isActive'>
            Zamówienie
          </ListItem>

          <ListItem exact to='/auth' activeClassName='isActive'>
            Rejestracja
          </ListItem>
        </List>

        <HamburgerWrapper
          data-testid='navigation-hamburger'
          isOpen={isOpen}
          onClick={handleIsOpen}
        >
          <StyledHamburger isOpen={isOpen} />
        </HamburgerWrapper>
      </Wrapper>
    </>
  )
}

export default Navigation
