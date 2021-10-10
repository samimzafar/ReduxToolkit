import { useRef } from "react";
import { useDispatch } from "react-redux";
import { usersAction } from "../store/UsersStore";
const FilterComponent = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const filterUsers = () => {
    dispatch(usersAction.filteredUsers(inputRef.current.value));
  };
  return (
    <>
      <input
        type="text"
        name=""
        className="form-control mb-3"
        placeholder="Search User Name ...."
        ref={inputRef}
        onChange={filterUsers}
      />
    </>
  );
};
export default FilterComponent;
