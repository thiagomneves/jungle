import React, { Component } from 'react'
import { Link, withRouter  } from 'react-router-dom'

import api from './services/api'
import { login } from './services/auth'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSignIn = async e => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
    } else {
      try {
        const response = await api.post('/auth/login', { email, password })
        login(response.data.token)
        this.props.history.push('/app')
      } catch (err) {
        this.setState({
          error: 'Houve um problema com o login, verifique suas credenciais.'
        })
      }
    }
  }

  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleSignIn}>
          <div className="form-group">
            <input type="email" placeholder="Endereço de e-mail" onChange={e => this.setState({ email: e.target.value })} className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
            <hr />
            <Link to="/signup">Criar conta grátis</Link>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
