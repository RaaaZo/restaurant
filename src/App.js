import React, { Suspense } from 'react'
import StyleTemplate from 'templates/StyleTemplate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from 'components/organisms/Navigation'
import Footer from 'components/organisms/Footer'
import ScrollToTop from 'hooks/ScrollToTop'
import LoadingSpinner from 'components/utils/LoadingSpinner'

import 'react-toastify/dist/ReactToastify.css'
import ToastContainer from 'components/utils/ToastContainer'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const AppetizersPage = React.lazy(() => import('./pages/AppetizersPage'))
const SoupsPage = React.lazy(() => import('./pages/SoupsPage'))
const MainCoursesPage = React.lazy(() => import('./pages/MainCoursesPage'))
const DessertsPage = React.lazy(() => import('./pages/DessertsPage'))
const SaladsPage = React.lazy(() => import('./pages/SaladsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const MenuPage = React.lazy(() => import('./pages/MenuPage'))
const CartPage = React.lazy(() => import('./pages/CartPage'))
const ShippingPage = React.lazy(() => import('./pages/ShippingPage'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StyleTemplate>
        <Suspense fallback={<LoadingSpinner />}>
          <ToastContainer />
          <Navigation />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path='/appetizers' component={AppetizersPage} />
            <Route exact path='/soups' component={SoupsPage} />
            <Route exact path='/main' component={MainCoursesPage} />
            <Route exact path='/salads' component={SaladsPage} />
            <Route exact path='/desserts' component={DessertsPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/cart' component={CartPage} />
            <Route exact path='/shipping' component={ShippingPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
          </Switch>
          <Footer />
        </Suspense>
      </StyleTemplate>
    </Router>
  )
}

export default App
