import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'


const ProjectDetails = (props) => {
  const { project,auth } = props;
  // redirect waardoor die beschermd wordt en je niet zomaar op de abo pagina kan of de dashboard
  if (!auth.uid) return <Redirect to='/signin' /> 

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>
Above you can see what your subscription is. Below the start and end date.</p>
            </div>
          <div className="card-action grey lighten-4 grey-text">
            <div><p>The start date of your subscriptions:<b>{project.begindate}</b> </p></div>
            
            <div><p>The end date of your subscriptions:<b>{project.enddate} </b> </p></div>
          </div>
          <div className="card-action lightgrey">
            <div><div className="input-field">
            <button class="button">Delete</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)