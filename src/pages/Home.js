import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterComponent, LoaderComponent, UserDataList } from "../components";
import { usersAction } from "../store/UsersStore";

const Home = () => {
  const { users, loader } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersAction.getAllUsersAction());
  }, []);
  return !loader ? (
    <>
      <h4 className="btn btn-dark mb-3 d-flex justify-content-center">
        React-Redux Advanced ToolKit Async App
      </h4>
      <FilterComponent />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserDataList key={index} index={index} user={user} />
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <LoaderComponent />
  );
};

export default Home;
