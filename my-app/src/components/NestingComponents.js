import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

//created with rce snippet
export class ConditionalRenderingClass extends Component {

  // Created with rconst snippet
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      isLoggedIn: false
    }

  }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default ConditionalRenderingClass