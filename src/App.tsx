import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './modules/home'
import Financial from './modules/financial'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/financial" component={Financial} />
      </div>
    </Router>
  )
}

export default App
