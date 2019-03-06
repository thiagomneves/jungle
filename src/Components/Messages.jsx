import React from 'react'

import Sidebar from './Sidebar'

const Messages = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <h1>Mensagens</h1>
      </div>
    </div>
  )
}

export default Messages
