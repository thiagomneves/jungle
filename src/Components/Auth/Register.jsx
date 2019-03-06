import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { BASE_URL } from '../../base'
import Error from '../Error'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      success: false,
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const R = this
    const newUser = {
      name: this.name.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      password_confirmation: this.password_confirmation.value,
    }
    axios
      .post(`${BASE_URL}/auth/register`, newUser)
      .then( () => {
        R.setState({
          success: true
        })
      })
      .catch(function (error) {
        console.log(error.response)
        R.setState({
          error: error.response.data
        })
      })
  }
  
  render() {
    if(this.state.success) {
      return <Redirect to='/login' />
    }
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <Error error={this.state.error} />
                <div className="form-group row">
                  <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                  <div className="col-md-6">
                    <input id="name" type="text" className="form-control" name="name" ref={(ref) => this.name = ref} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="lastname" className="col-md-4 col-form-label text-md-right">Last Name</label>
                  <div className="col-md-6">
                    <input id="lastname" type="text" className="form-control" name="lastname" ref={(ref) => this.lastname = ref} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div className="col-md-6">
                    <input id="email" type="email" className="form-control" name="email" ref={(ref) => this.email = ref} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                  <div className="col-md-6">
                    <input id="password" type="password" className="form-control" name="password" ref={(ref) => this.password = ref} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div className="col-md-6">
                    <input id="password-confirm" type="password" className="form-control" name="password_confirmation" ref={(ref) => this.password_confirmation = ref} required />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
