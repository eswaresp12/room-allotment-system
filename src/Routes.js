import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Cart from './core/Cart'
import TotalRoom from './user/TotalRoom'
import Contact from './core/contact'
import DetailsForm from './user/DetailsForm'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/totalroom" exact component={TotalRoom} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/details" exact component={DetailsForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
