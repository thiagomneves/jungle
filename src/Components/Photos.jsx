import React from 'react'

import Sidebar from './Sidebar'

const Photos = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Fotos</h1>
      </div>
    </div>
  )
}

export default Photos
