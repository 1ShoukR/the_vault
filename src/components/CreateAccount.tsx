import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxTypescriptTypes";
import { setTestData } from "../redux/testReducer";

// Interface for the fake data set
interface FakeData {
  id: number;
  tennateFirstName: string;
  tennateLastName: string;
  address: string;
  revenue: number;
  expenses: number;
  profit: number;
}

type Props = {};

const CreateAccount = (props: Props) => {
  const dispatch = useAppDispatch();
  const readTestData = useAppSelector((state) => state?.testReducer?.data);

  // Define the fake data using the FakeData interface
  const fakeData: FakeData = {
    id: 1,
    tennateFirstName: "james",
    tennateLastName: "Cameron",
    address: "1234 fake street",
    revenue: 1000000,
    expenses: 500000,
    profit: 500000,
  };

  console.log("readTestData: ", readTestData);

  return (
    <div>
      <h1>Create Account</h1>
      {/* Use setTestData action to dispatch the data */}
      <button onClick={() => dispatch(setTestData(fakeData))}>Send Data</button>
    </div>
  );
};
export default CreateAccount;
