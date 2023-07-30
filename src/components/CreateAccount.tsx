import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxTypescriptTypes";
import { setTestData } from "../redux/testReducer";
import { sendCreateAccountInfo } from "../hooks/fetchHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { CreateAccountInterface } from "../utilities/interfaces";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { setUser } from "../redux/userAccountSlice";

const CreateAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const userAuthData = useAppSelector((state) => state.userAuth);
  console.log('userAuth', userAuthData)
  const [formData, setFormData] = useState<CreateAccountInterface>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value,}));
  };

  const handleSubmit  = async (event: React.FormEvent<HTMLFormElement>, formData: CreateAccountInterface, dispatch: AppDispatch) => {
    event.preventDefault();
    // You can dispatch the form data to Redux here using useAppDispatch and setTestData
    console.log(formData);
    const acc = await sendCreateAccountInfo(event, formData, dispatch);
    if (acc === true) {
      navigate('/')
    } else {
      alert('something happened')
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12 rounded-full object-cover"
            src="https://www.pngitem.com/pimgs/m/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png"
            alt=""
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create Account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(event, formData, dispatch);
          }}
        >
          <div className="-space-y-px rounded-md">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
