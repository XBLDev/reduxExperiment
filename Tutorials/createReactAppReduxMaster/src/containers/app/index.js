import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about-us">About</Link></p>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
    
    {/* <Home/> */}
  </div>
)

export default App
