import React, { Component } from 'react'
import axios from 'axios'

import { BASE_URL } from '../../base'
import Sidebar from '../Sidebar'

class Community extends Component {
  constructor(props){
    super(props)
    this.state = {
      community: []
    }
  }

  componentDidMount(){
    const { handle } = this.props.match.params
    axios.get(`${BASE_URL}/community/${handle}`)
      .then(res => {
        const community = res.data
        this.setState({community})
      })
  }
  render () {
    const community = this.state.community
    return (
      <div className="row">
          <Sidebar user={this.props.user} />
          <div className="col-12 col-md-6">
            <div className="card">
              <img src="https://picsum.photos/700/300/?random" className="card-img-top" alt="..." />
              <div className="card-body">
                {community.title}
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                Informação
              </div>
              <div className="card-body">
                {/* <p className="card-text">- O homem nunca pisou na Lua.</p>
                <p className="card-text">- A Princesa Diana foi assassinada.</p>
                <p className="card-text">- Paul McCartney morreu em 1966.</p>
                <p className="card-text">- A Terra é governada por uma Ordem Interplanetária.</p>
                <p className="card-text">- O Papa João Paulo I foi morto pela própria Igreja.</p>
                <p className="card-text">- A AIDS foi criada em laboratório.</p>
                <p className="card-text">- Nenhum avião atingiu o Pentágono em 11 de setembro de 2001.</p>
                <p className="card-text">Espantou-se com essas afirmações? Você ainda não viu nada! Nesta comunidade discutiremos as conspirações que envolvem o planeta. Prepare-se para entrar num mundo desconhecido: o nosso mundo!</p>
                <p className="card-text">+-----------------------------------------------------------+</p>
                <p className="card-text">Ó vós que aqui entrais: perdei toda a esperança! Posts racistas, pedófilos, ofensivos, piadas ou simplesmente babacas serão deletados.</p>
                <p className="card-text">Jogos NÃO!</p>
                <p className="card-text">Ofensores contumazes serão banidos.</p>
                <p className="card-text">+----------------------------------------------------------+ PROPAGANDA, FIM DO MUNDO, EMO, PENTAGON STRIKE=BAN!</p>
                <p className="card-text">Comunidade criada: 24/05/2004</p> */}
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                Quadro de Discussão  <span className="card-subtitle mb-2 text-muted">{'{'}{'{'} count($community-&gt;topics) {'}'}{'}'}</span>
                <a className="btn btn-primary btn-sm" href="/community/{{ $community->id }}/topic/create">Novo Tópico</a>
              </div>
              <div className="card-body">
                @if (count($community-&gt;topics) &gt; 0)
                @foreach ( $community-&gt;topics as $topic)
                <a href="/community/{{ $community->id }}/topic/{{ $topic->id }}">{'{'}{'{'} $topic-&gt;title {'}'}{'}'}</a>
                @if (count($topic-&gt;posts) &gt; 0)
                <span className="badge badge-primary badge-pill">{'{'}{'{'} count($topic-&gt;posts) {'}'}{'}'}</span>
                @endif
                <div className="dropdown-divider" />
                @endforeach
                @endif
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Membros <span className="card-subtitle mb-2 text-muted">{'{'}{'{'} count($community-&gt;members) {'}'}{'}'}</span></h5>
                <div className="row">
                  @if (count($community-&gt;members) &gt; 0)
                  @foreach ($community-&gt;members as $member)
                  <div className="col-4 mt-4">
                    <a href="/user/{{ $member->id }}">
                      <img src="https://image.flaticon.com/icons/png/512/149/149071.png" className="img-fluid rounded-circle" alt="..." />
                      <div className="text-center">{'{'}{'{'} $member-&gt;name {'}'}{'}'}</div>
                    </a>
                  </div>
                  @endforeach
                  @endif
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Community


