import { configureStore } from "@reduxjs/toolkit";
import usersStore from "./UsersStore";
const Store = configureStore({
  reducer: { users: usersStore },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
export default Store;
