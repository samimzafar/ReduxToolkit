import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { LoaderComponent } from "../components";
import { getUserDetailAction } from "../store/AsyncAction";

const Details = () => {
  const { id } = useParams();
  const { userDetails, loader } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailAction(id));
  }, []);
  return !loader ? (
    <>
      <Link to="/" className="btn btn-dark mb-3">
        Go to Main Page
      </Link>
      <div className="card">
        <div className="card-header">
          <h3>
            <span className="text-info">{userDetails.name}</span> Details
          </h3>
        </div>
        <div className="card-body">
          <div className="row mb-5">
            <div className="col-3">Name</div>
            <div className="col-9 text-end">{userDetails.name}</div>
          </div>
          <div className="row mb-5">
            <div className="col-3">Email</div>
            <div className="col-9 text-end">{userDetails.email}</div>
          </div>
          <div className="row mb-5">
            <div className="col-3">UserName</div>
            <div className="col-9 text-end">{userDetails.username}</div>
          </div>
          <div className="row mb-5">
            <div className="col-3">Phone</div>
            <div className="col-9 text-end">{userDetails.phone}</div>
          </div>
          <div className="row mb-5">
            <div className="col-3">Web Link</div>
            <div className="col-9 text-end">{userDetails.website}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <LoaderComponent />
  );
};

export default Details;
