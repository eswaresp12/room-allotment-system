import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Cart from './core/Cart';
import TotalRoom from './user/TotalRoom';
import Contact from './core/contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/totalroom" exact component={TotalRoom} />         
                <Route path="/cart" exact component={Cart} />
                <Route path="/contact" exact component={Contact} />


            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
