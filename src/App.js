import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import logo from './logo.svg'
import './scss/style.scss'
import { BASE_URL } from './base'
import Routes from './routes'
import Header from './Components/Header'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Feed from './Components/Feed'
import Messages from './Components/Messages'
import Photos from './Components/Photos'
import Bookmarks from './Components/Bookmarks'
import Friends from './Components/Friends'
import Events from './Components/Events'
import Pages from './Components/Pages'
import Communities from './Components/Communities/Communities'
import Community from './Components/Communities/Community';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: []
    }
  }
  componentDidMount(){
    const userId = 1
    axios.get(`${BASE_URL}/user/${userId}`)
      .then(res => {
        const user = res.data
        this.setState({user})
      })
  }

  render() {
    return (
      <Routes />
    )
    return (
      <Router>
        <div className="App">
          <Header user={this.state.user} />
          <main className="py-4">
            <div className="container">
              <Route path='/' exact render={() => <Redirect to='/feed' />} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              
              <Route path='/feed' exact render={() => <Feed user={this.state.user} />} />
              <Route path='/messages' exact render={() => <Messages user={this.state.user} />} />
              <Route path='/photos' exact render={() => <Photos user={this.state.user} />} />
              <Route path='/bookmarks' exact render={() => <Bookmarks user={this.state.user} />} />
              <Route path='/friends' exact render={() => <Friends user={this.state.user} />} />
              <Route path='/events' exact render={() => <Events user={this.state.user} />} />
              <Route path='/communities' exact render={() => <Communities user={this.state.user} />} />
              <Route path='/pages' exact render={() => <Pages user={this.state.user} />} />

              <Route path='/community/:handle' render={(routeParams) => <Community user={this.state.user} match={routeParams.match} />}/>
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
