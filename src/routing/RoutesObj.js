import { Details, Home } from "../pages";

const RoutesObj = {
  Root: {
    path: "/",
    component: Home,
  },
  Home: {
    path: "/home",
    component: Home,
  },
  Details: {
    path: "/user/:id",
    component: Details,
  },
};
export default RoutesObj;
