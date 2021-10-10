import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Finance from './pages/Finance'
import Login from './pages/Login'
import PrivateRoute from './components/Route/PrivateRoute'
import Invest from './pages/Invest'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/finance" component={Finance} />
        <PrivateRoute exact path="/invest" component={Invest} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
