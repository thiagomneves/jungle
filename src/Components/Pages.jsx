import React from 'react'

import Sidebar from './Sidebar'

const Pages = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Páginas</h1>
      </div>
    </div>
  )
}

export default Pages
