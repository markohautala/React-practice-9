import React from 'react'

function UserMessage(props) {
  return (
    <div>
          {props.isLoggedIn ? (
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

export default UserMessage