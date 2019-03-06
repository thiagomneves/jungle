import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { BASE_URL } from '../../base'
import Sidebar from '../Sidebar'

class Communities extends Component {
  constructor(props){
    super(props)
    this.state = {
      communities: []
    }
  }

  componentDidMount(){
    axios.get(`${BASE_URL}/community`)
      .then(res => {
        const communities = res.data
        this.setState({communities})
      })
  }
  render () {
    return (
      <div className="row">
        <Sidebar user={this.props.user} />
        <div className="col">
          <div className="card">
            <div className="card-header">
              <a href="/community/create" className="btn btn-primary btn-sm">Nova Comunidade</a>
            </div>

            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Proprietário</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.communities.map(community => {
                    return (
                      <tr>
                        <th scope="row">{community.id}</th>
                        <td><Link to={`/community/${community.id}`}>{community.title}</Link></td>
                        <td>{community.user_id}</td>
                        <td>
                          <Link className="btn btn-primary btn-sm" to={`/community/${community.id}/edit`}>Editar</Link>
                          <Link className="btn btn-danger btn-sm" to={`/community/${community.id}/delete`}>Apagar</Link>
                          {
                            //@if ($user.communities.find($community.id))
                            false ?
                              <a className="btn btn-danger btn-sm" href="/community/{community.id}/exit">Sair da Comunidade</a>
                            :
                              <a className="btn btn-success btn-sm" href="/community/{community.id}/join">Entrar na Comunidade</a>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
    // return (
    //   <div className="col">
    //     <div className="row">
    //       <div className="card">
    //         <div className="card-header">
    //           <h5 className="card-title">Comunidades</h5>
    //         </div>
    //       </div>
    //       {JSON.stringify(this.state.communities)}
    //     </div>
    //   </div>
    // )
  }
}

export default Communities
