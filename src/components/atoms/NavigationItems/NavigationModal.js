import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'

export const Modal = styled.div`
  transform: translateX(150%);
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 100vh;
  z-index: 999;

  background: transparent;
  background-color: ${({ theme }) => theme.navigationLight};
  -webkit-box-shadow: -5px 0px 22px 5px rgba(18, 18, 18, 1);
  -moz-box-shadow: -5px 0px 22px 5px rgba(18, 18, 18, 1);
  box-shadow: -5px 0px 22px 5px rgba(18, 18, 18, 1);

  transition: transform 0.4s ease-in-out;

  @media (min-width: 768px) {
    width: 250px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`

const Backdrop = styled.div`
  transform: translateX(150%);
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: transform 0.35s ease-in-out;
  z-index: 10;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`

const List = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 200;

  @media (orientation: landscape) {
    justify-content: space-around;
  }

  @media (orientation: landscape) and (min-width: 900px) {
    justify-content: center;
  }
`

const ListItem = styled(NavLink)`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.navigationDark};
  border: 2px solid ${({ theme }) => theme.navigationDark};
  text-align: center;
  transition: transform 0.4s 0.1s ease-in-out, color 0.4s 0.1s ease-in-out,
    border-color 0.4s 0.1s ease-in-out;

  &.isActive {
    color: #fff;
    border-color: #fff;
  }

  &:hover {
    transform: scale(1.05);
    color: #fff;
    border-color: #fff;
  }

  @media (orientation: landscape) {
    padding: 5px 20px;
    margin: 15px auto;
    margin: 0;
  }

  @media (orientation: landscape) and (min-width: 900px) {
    margin: 30px auto;
  }
`

const NavigationModal = ({ isOpen, closeModal }) => {
  const userLogin = useSelector((state) => state.userLogin)
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={closeModal} />
      <Modal isOpen={isOpen}>
        <List>
          <ListItem
            exact
            to='/'
            activeClassName='isActive'
            onClick={closeModal}
          >
            Home
          </ListItem>

          <ListItem
            exact
            to='/menu'
            activeClassName='isActive'
            onClick={closeModal}
          >
            Menu
          </ListItem>

          <ListItem
            exact
            to='/cart'
            activeClassName='isActive'
            onClick={closeModal}
          >
            Zamówienie
          </ListItem>

          {userLogin.userInfo?.username ? (
            <ListItem
              exact
              to='/profile'
              activeClassName='isActive'
              onClick={closeModal}
            >
              {userLogin.userInfo.username}
            </ListItem>
          ) : (
            <ListItem
              exact
              to='/login'
              activeClassName='isActive'
              onClick={closeModal}
            >
              Zaloguj się
            </ListItem>
          )}

          <ListItem
            exact
            to='/contact'
            activeClassName='isActive'
            onClick={closeModal}
          >
            Kontakt
          </ListItem>
        </List>
      </Modal>
    </>
  )
}

NavigationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default NavigationModal
