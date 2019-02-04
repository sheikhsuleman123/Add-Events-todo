import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    begindate: '',
    enddate:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push('/');
  }

  // redirect waardoor die beschermd wordt en je niet zomaar op de abo pagina kan of de dashboard
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add subscription</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} required />
            <label htmlFor="title">Add Todo</label>
          </div>
          <div className="input-field">
            <input id="begindate" type="date" className="materialize-textarea" onChange={this.handleChange} required/>
            <label htmlFor="content">Starting Date</label>
          </div>
          <div className="input-field">
            <input id="enddate" type="date" className="materialize-textarea" onChange={this.handleChange} required/>
            <label htmlFor="content">End Date</label>
          </div>
          <div className="input-field">
            <button class="button">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)