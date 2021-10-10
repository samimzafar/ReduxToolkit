import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersAction, getUserDetailAction } from "./AsyncAction";
const UsersStore = createSlice({
  name: "usersReducer",
  //<----Global State are created in InitialState--->
  initialState: {
    users: [],
    usersContainer: [],
    loader: false,
    error: {},
    userDetails: {},
  },
  //<----Simple Reducer is used for Sync Call and Sync actions are created here--->
  reducers: {
    filteredUsers: (state, action) => {
      state.users = state.usersContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload)
      );
    },
  },

  //<----Extra Reducer is used for Async Call--->
  //<----Every Async Call has 3 Stages i-e pending, fulfilled, rejected--->
  extraReducers: {
    //<--------------Get All User Data-------------->
    [getAllUsersAction.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllUsersAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload;
      state.usersContainer = action.payload;
    },
    [getAllUsersAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },

    //<--------------Get User Details-------------->
    [getUserDetailAction.pending]: (state, action) => {
      state.loader = true;
    },
    [getUserDetailAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.userDetails = action.payload;
    },
    [getUserDetailAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});
//<--------------All User Actions(Async + Sync ) are exported from here-------------->
export const usersAction = {
  filteredUsers: UsersStore.actions.filteredUsers,
  getAllUsersAction,
  getUserDetailAction,
};
export default UsersStore.reducer;
