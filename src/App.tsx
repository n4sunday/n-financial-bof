import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Finance from './pages/Finance'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/finance" component={Finance} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
