import React from 'react'

const User = ({user}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{user.name + user.lastname}</h5>
      </div>
      <div className="card-text">
        <p>{user.email}</p>
      </div>
    </div>
  )
}
export default User
