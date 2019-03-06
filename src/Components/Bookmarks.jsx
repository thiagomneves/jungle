import React from 'react'

import Sidebar from './Sidebar'

const Bookmarks = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Favoritos</h1>
      </div>
    </div>
  )
}

export default Bookmarks
