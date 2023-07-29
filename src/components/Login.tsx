import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="email">Sign in with your Email or Username</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login