import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createProject, updateProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import firebase from '../../config/fbConfig'
class EditProject extends Component {
    state = {
        title: '',
        begindate: '',
        enddate: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateProject(this.props.match.params.id, this.state)
        this.props.history.push('/');
    }
    componentDidMount() {

        var id = this.props.match.params.id;
        firebase
            .firestore()
            .collection("projects")
            .doc(id)
            .get()
            .then(querySnapshot => {
                var a = Object.assign({}, querySnapshot.data())
                this.setState({
                    title: a.title,
                    begindate: a.begindate,
                    enddate: a.enddate,
                })

            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    // redirect waardoor die beschermd wordt en je niet zomaar op de abo pagina kan of de dashboard
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Edit subscription</h5>
                    <div className="input-field">
                        <input type="text" id='title1' name="title"
                            value={this.state.title}
                            onChange={this.handleChange} required />
                        <label htmlFor="title" className={this.state.title ? "active" : ''} >Add Todo</label>
                    </div>
                    <div className="input-field">
                        <input id="begindate1" name="begindate"
                            value={this.state.begindate}
                            type="date" className="materialize-textarea" onChange={this.handleChange} required />
                        <label htmlFor="content">Starting Date</label>
                    </div>
                    <div className="input-field">
                        <input id="enddate1" name="enddate"
                            value={this.state.enddate}

                            type="date" className="materialize-textarea" onChange={this.handleChange} required />
                        <label htmlFor="content">End Date</label>
                    </div>
                    <div className="input-field">
                        <button className="button">Edit</button>
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
        updateProject: (id, project) => dispatch(updateProject(id, project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject)
