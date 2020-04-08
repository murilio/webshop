import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

// paginas
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Product from './pages/Product'
import Carrinho from './pages/Carrinho'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <PrivateRoute exact path="/" component={ Home } />
            <PrivateRoute path="/products" component={ Product } />
            <PrivateRoute path="/carrinho" component={ Carrinho } />
            <PrivateRoute path="/perfil" component={ Profile } />
        </Switch>
    </BrowserRouter>
)

export default Routes
