import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
    )
}

export default App