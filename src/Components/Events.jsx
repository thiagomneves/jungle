import React from 'react'

import Sidebar from './Sidebar'

const Events = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Eventos</h1>
      </div>
    </div>
  )
}

export default Events
