import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default () => {

    return (
        <switch>
            <Route exact path="/home">
                <Home />
            </Route>

            <Route exact path="/sobre">
                Sobre
            </Route>

        </switch>
    );
}