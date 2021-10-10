import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/users";
//<--------------Get All User Data Function-------------->
export const getAllUsersAction = createAsyncThunk("getAllUsers", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});
//<--------------Get User Details Function-------------->
export const getUserDetailAction = createAsyncThunk(
  "getUserDetail",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  }
);
//<--------------All Async Actions are created here that could be used anywhere in this project-------------->
export const AsyncAction = {
  getAllUsersAction,
  getUserDetailAction,
};
