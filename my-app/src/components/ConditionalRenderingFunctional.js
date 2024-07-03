import React from 'react'

// Created with rfce snippet
function ConditionalRenderingFunctional(props) {
  return (
    <div>
      <h1>{props.connected ? "Connected" : "Not connected"}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional