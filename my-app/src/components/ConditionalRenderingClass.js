import React, { Component } from 'react'

//created with rce snippet
export class ConditionalRenderingClass extends Component {

  // Created with rconst snippet
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      isLoggedIn: true
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Loaded" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
          <div>
            <h1>Welcome User</h1>
            <button>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Welcome Guest</h1>
            <button>Login</button>
          </div>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass