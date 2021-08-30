import React from 'react'
import Home from './components/Home'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/Search'
import Facility from './components/Facility'
import Mybooking from './components/Mybooking'
import Messages from './components/Messages'
import Profile from './components/Profile'


const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Home path="/" exact />
                    <Route path="/search" ><Search /></Route>
                    <Route path="/facility" ><Facility /></Route>
                    <Route path="/mybooking" ><Mybooking /></Route>
                    <Route path="/messages" ><Messages /></Route>
                    <Route path="/profile" ><Profile /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App