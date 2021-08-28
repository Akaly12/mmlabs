import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

export default () => {

    return (
        <switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="*">
                <Login />
            </Route>
            <Route exact path="/registrar">
                Registre-se
            </Route>

        </switch>
    );
}