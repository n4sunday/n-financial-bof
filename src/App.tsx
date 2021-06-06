import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './modules/home'
import Financial from './modules/financial'
import Login from './modules/login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/financial" component={Financial} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
