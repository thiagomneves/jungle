import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import SignIn from './SignIn'
import Header from './Components/Header'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => {
      console.log(isAuthenticated)
      return isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
    }
  />
)

const Routes = () => (
  <Router>
    <Switch>
      
      <Route exact path='/' component={() => <SignIn />} />
      <Route exact path='/signup' component={() => <h1>SignUp</h1>} />
      <PrivateRoute exact path='/app' component={() => <h1>App</h1>} />
      <Route exact path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
)

export default Routes;
