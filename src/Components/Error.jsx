import React from 'react'
import { Alert } from 'reactstrap'

const Error = ({ error }) => {
  console.log(error)
  if (error === "") {
    return ""
  } else {
    let msg = error.message
    if (error.errors.email) {
      msg = error.errors.email[0]
    }
    return (
      <Alert color="danger">{msg}</Alert>
    )
  }
}

export default Error
