import React, { useRef } from 'react'
import { client } from '../utilities/client'

type Props = {}

const Login: React.FC<Props> = (props) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const body = { email: emailRef, password: passwordRef };

  console.log("env", import.meta.env.VITE_API_URL);

  
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const body = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      await client.post("/api/auth/login", body);
    }
  };

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 md:flex-row">
      <div className="mb-8 md:mb-0 md:mr-16">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://www.pngitem.com/pimgs/m/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png"
          alt=""
        />
      </div>
      <div>
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">Sign in with your Email or Username</label>
            <input
              className="w-full"
              ref={emailRef}
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="w-full"
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={(e) => handleClick(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login