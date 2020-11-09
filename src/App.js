import React from 'react'
import StyleTemplate from 'templates/StyleTemplate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import MenuPage from 'pages/MenuPage'
import AppetizersPage from 'pages/AppetizersPage'
import SoupsPage from 'pages/SoupsPage'
import MainCoursesPage from 'pages/MainCoursesPage'
import DessertsPage from 'pages/DessertsPage'
import SaladsPage from 'pages/SaladsPage'
import ContactPage from 'pages/ContactPage'
import CartPage from 'pages/CartPage'
import AuthenticationPage from 'pages/AuthenticationPage'
import Navigation from 'components/organisms/Navigation'
import Footer from 'components/organisms/Footer'
import ScrollToTop from 'hooks/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StyleTemplate>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route exact path='/appetizers' component={AppetizersPage} />
          <Route exact path='/soups' component={SoupsPage} />
          <Route exact path='/main' component={MainCoursesPage} />
          <Route exact path='/salads' component={SaladsPage} />
          <Route exact path='/desserts' component={DessertsPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/auth' component={AuthenticationPage} />
        </Switch>
        <Footer />
      </StyleTemplate>
    </Router>
  )
}

export default App
