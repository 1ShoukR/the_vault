import { CreateAccountInterface } from "../utilities/interfaces";
import { AppDispatch } from "../redux/store";
import { setTestData } from "../redux/testReducer";
import { redirect } from "react-router-dom";


export const sendCreateAccountInfo = async (event: React.FormEvent<HTMLFormElement>, formData: CreateAccountInterface, dispatch: AppDispatch) => {
    event.preventDefault();
    console.log('from hooks', formData);
    const response = await fetch("http://127.0.0.1:4000/api/users/create", {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status === 200) {
        alert(data.message)
        redirect("http://localhost:3000/login");
    }    
}