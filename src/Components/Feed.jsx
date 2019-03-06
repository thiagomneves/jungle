import React from 'react'

import Sidebar from './Sidebar'
import CreatePublish from './CreatePublish'

const Feed = props => {
  return (
    <div className="row">
      <Sidebar user={props.user} />
      <div className="col">
        <CreatePublish />
      </div>
      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Assuntos do Momento</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur consequuntur minus iusto, molestiae harum fuga nostrum rerum, natus voluptates accusamus saepe corporis. Odio corrupti eius repellendus earum incidunt expedita?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
