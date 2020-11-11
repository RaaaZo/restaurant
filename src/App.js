import React, { Suspense } from 'react'
import StyleTemplate from 'templates/StyleTemplate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from 'components/organisms/Navigation'
import Footer from 'components/organisms/Footer'
import ScrollToTop from 'hooks/ScrollToTop'
import LoadingSpinner from 'components/utils/LoadingSpinner'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const AppetizersPage = React.lazy(() => import('./pages/AppetizersPage'))
const SoupsPage = React.lazy(() => import('./pages/SoupsPage'))
const MainCoursesPage = React.lazy(() => import('./pages/MainCoursesPage'))
const DessertsPage = React.lazy(() => import('./pages/DessertsPage'))
const SaladsPage = React.lazy(() => import('./pages/SaladsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const MenuPage = React.lazy(() => import('./pages/MenuPage'))
const CartPage = React.lazy(() => import('./pages/CartPage'))
const AuthenticationPage = React.lazy(() =>
  import('./pages/AuthenticationPage')
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StyleTemplate>
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </StyleTemplate>
    </Router>
  )
}

export default App
