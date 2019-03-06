import React from 'react'

import Sidebar from './Sidebar'

const Friends = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Amigos</h1>
      </div>
    </div>
  )
}

export default Friends
