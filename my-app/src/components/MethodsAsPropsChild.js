import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                        <button onClick={props.handleSignOut}>Logout here!</button>
                    </div>
                ) : (
                    <div>
                      <p>Please sign in</p>
                      <button onClick={props.handleSignIn}>Please sign in</button>
                    </div>
                )
            }
        </div>
    )
}

export default MethodsAsPropsChild