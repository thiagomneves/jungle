import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => {
  return (
    <div className="col-12 col-md-3">
      <div className="card mb-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><Link to={`/user/${props.user.id}`}><i className="fa fa-user-circle" /> {props.user.name + ' ' + props.user.lastname}</Link></li>
          <li className="list-group-item"><Link to="/feed"><i className="fa fa-rss" /> Feed de noticias</Link></li>
          <li className="list-group-item"><Link to="/messages"><i className="fa fa-envelope" /> Mensagens</Link></li>
          <li className="list-group-item"><Link to="/photos"><i className="fa fa-camera" /> Fotos</Link></li>
          <li className="list-group-item"><Link to="/bookmarks"><i className="fa fa-bookmark" /> Favoritos</Link></li>
          <li className="list-group-item"><Link to="/friends"><i className="fa fa-address-book" /> Amigos</Link></li>
          <li className="list-group-item"><Link to="/events"><i className="fa fa-calendar" /> Eventos</Link></li>
          <li className="list-group-item"><Link to="/communities"><i className="fa fa-users" /> Comunidades</Link></li>
          <li className="list-group-item"><Link to="/pages"><i className="fa fa-flag" /> Páginas</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
