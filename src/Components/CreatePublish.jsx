import React from 'react'

const CreatePublish = props => {
  return (
    <div className="card">
      <h5 className="card-header">Criar Publicação</h5>
      <div className="card-body">
        O que há de novo?
        <form id="form-publication" user_id="{{" $user->id {'}'}{'}'}&gt;
          @csrf
          <div className="form-group">
            <input type="text" className="form-control" id="publication-content" placeholder="O que há de novo?" />
          </div>
          <button className="btn btn-primary btn-sm" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePublish
