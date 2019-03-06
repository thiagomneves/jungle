import React, { Component } from 'react'
import axios from 'axios'

import { BASE_URL } from '../base'
import User from './User'

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    console.log(BASE_URL)
    axios.get(`${BASE_URL}/user`)
      .then(res => {
        const users = res.data
        this.setState({users})
      })
  }
  render (){
    return (
      <div>
        <h1>Users</h1>
        <div className="container">
          <div className="row">
          {
            this.state.users.map(user => {
              return (
                <div className="col-4">
                  <User user={user} key={user.id} />
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export default Users
