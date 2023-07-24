import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxTypescriptTypes";
import { setTestData } from "../redux/testReducer";
import { sendCreateAccountInfo } from "../hooks/fetchHooks";
import { CreateAccountInterface } from "../utilities/interfaces";



const CreateAccount: React.FC = () => {
  const dispatch = useAppDispatch();
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, ) => {
    event.preventDefault();
    // You can dispatch the form data to Redux here using useAppDispatch and setTestData
    console.log(formData);
  };

  return (
    <div className="text-center justify-center ">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {sendCreateAccountInfo(event, formData, dispatch)}} className="mt-4">
        <div className="flex justify-center">
          <div className="w-80">
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full rounded-md border p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full rounded-md border p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full rounded-md border p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-md border p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-md border p-2"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
