import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import Filial from '../filial/filial'
import Usuario from '../usuario/usuario'

export default props => (

    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path='filial' component={Filial} />
            <Route path='usuario' component={Usuario} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>    
)