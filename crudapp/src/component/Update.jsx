import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../userreducerslice/UserReducerslice";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!existingUser) {
      alert("User not found!");
      navigate("/");
    }
  }, [existingUser, navigate]);

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (existingUser) {
      dispatch(
        updateUser({
          id: existingUser.id,
          name: uname,
          email: uemail,
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="createContainer">
      <div className="insideContainer">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="form-control"
              autoComplete="name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="email"
              className="form-control"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <button className="submitbtn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
