import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <input type="hidden" name="_token" defaultValue="rIxHUuFDJATPivIDunML1nwaRPejGs8rvAm1os2H" />
                  <div className="form-group row">
                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                    <div className="col-md-6">
                      <input id="email" type="email" className="form-control" name="email" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                    <div className="col-md-6">
                      <input id="password" type="password" className="form-control" name="password" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 offset-md-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                        <label className="form-check-label" htmlFor="remember">
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <div className="col-md-8 offset-md-4">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                      <a className="btn btn-link" href="http://localhost:8000/password/reset">
                        Forgot Your Password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
