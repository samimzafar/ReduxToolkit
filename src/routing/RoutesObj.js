import { Details, Home } from "../pages";

const RoutesObj = {
  Root: {
    path: "/ReduxToolkit",
    component: Home,
  },
  Home: {
    path: "/ReduxToolkit/home",
    component: Home,
  },
  Details: {
    path: "/user/:id",
    component: Details,
  },
};
export default RoutesObj;
