import { CreateAccountInterface } from "../utilities/interfaces";
import { AppDispatch } from "../redux/store";


export const sendCreateAccountInfo = async (event: React.FormEvent<HTMLFormElement>, formData: CreateAccountInterface, dispatch: AppDispatch) => {
    event.preventDefault();

}