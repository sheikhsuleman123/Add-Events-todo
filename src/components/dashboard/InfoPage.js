import React, { Component } from 'react'

class Infopage extends Component {

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="container">
      <h5 className="grey-text text-darken-3">About Us</h5>
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <p class="lead">We have created a website to add your subscriptions to your account by name, start date and end date. 5 weeks before the end of your subscription you will receive a notification that your subscription expires. You are then informed to let him walk or stop.</p>
            <p class="lead">Please follow the 4 Steps:</p>
            <ul>
              <li>1. Registreer yourself by clicking the register</li>
              <li>2. Log into account website</li>
              <li>3. Add your subscriptions</li>
              <li>4. Receive a notification 5 weeks before the end of your subscription</li>
            </ul>
            
          </div>
          </div>
        </div>
      
        </form>
      </div>
    )
  }
}

export default Infopage